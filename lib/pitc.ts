import { lookup } from "node:dns";
import { request } from "node:https";
import { URL } from "node:url";

type OfficialResponse = {
  ok: boolean;
  status: number;
  headers: Record<string, string | string[] | undefined>;
  text: string;
};

function parseInputs(html: string) {
  const fields = new URLSearchParams();
  const inputPattern = /<input[^>]+>/gi;
  const attrPattern = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)=["']([^"']*)["']/g;
  for (const input of html.match(inputPattern) || []) {
    const attrs = new Map<string, string>();
    for (const match of input.matchAll(attrPattern)) attrs.set(match[1].toLowerCase(), match[2]);
    const name = attrs.get("name");
    if (name) fields.set(name, attrs.get("value") || "");
  }
  return fields;
}

function rewriteBillHtml(html: string) {
  const styles = Array.from(html.matchAll(/<style[\s\S]*?<\/style>/gi))
    .map((match) => match[0])
    .join("\n");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const safeFragment = bodyMatch ? bodyMatch[1] : html;
  return `${styles}\n${safeFragment}`
    .replace(/<!doctype[\s\S]*?>/gi, "")
    .replace(/<\/?(html|head|body)[^>]*>/gi, "")
    .replace(/<meta[\s\S]*?>/gi, "")
    .replace(/<title[\s\S]*?<\/title>/gi, "")
    .replace(/<link[\s\S]*?>/gi, "")
    .replaceAll('href="/', 'href="https://bill.pitc.com.pk/')
    .replaceAll('src="/', 'src="https://bill.pitc.com.pk/')
    .replaceAll("href='/", "href='https://bill.pitc.com.pk/")
    .replaceAll("src='/", "src='https://bill.pitc.com.pk/");
}

function extractCookies(headers: OfficialResponse["headers"]) {
  const setCookie = headers["set-cookie"];
  const rawCookies = Array.isArray(setCookie) ? setCookie : setCookie ? setCookie.split(/,(?=\s*[^;,\s]+=)/) : [];
  return rawCookies
    .map((cookie) => cookie.split(";")[0].trim())
    .filter(Boolean)
    .join("; ");
}

function officialRequest(url: string, options: { method?: "GET" | "POST"; headers?: Record<string, string>; body?: string } = {}) {
  return new Promise<OfficialResponse>((resolve, reject) => {
    const parsed = new URL(url);
    const body = options.body || "";
    const req = request(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port: parsed.port || 443,
        path: `${parsed.pathname}${parsed.search}`,
        method: options.method || "GET",
        headers: {
          ...options.headers,
          ...(body ? { "content-length": Buffer.byteLength(body).toString() } : {}),
        },
        lookup: (hostname, lookupOptions, callback) => lookup(hostname, { ...lookupOptions, family: 4 }, callback),
        timeout: 25000,
      },
      (response) => {
        const chunks: Buffer[] = [];
        response.on("data", (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
        response.on("end", () => {
          const status = response.statusCode || 0;
          resolve({
            ok: status >= 200 && status < 300,
            status,
            headers: response.headers,
            text: Buffer.concat(chunks).toString("utf8"),
          });
        });
      },
    );
    req.on("timeout", () => req.destroy(new Error("The official PITC bill system timed out.")));
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

function resolveOfficialUrl(baseUrl: string, location: string) {
  return new URL(location, baseUrl).toString();
}

export async function fetchPitcBill(billUrl: string, reference: string) {
  const headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125.0 Safari/537.36",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    referer: billUrl,
  };
  const formResponse = await officialRequest(billUrl, { headers });
  if (!formResponse.ok) throw new Error("Could not load the official bill form.");
  const formHtml = formResponse.text;
  const cookie = extractCookies(formResponse.headers);
  const body = parseInputs(formHtml);
  body.set("rbSearchByList", "refno");
  body.set("searchTextBox", reference);
  body.set("ruCodeTextBox", "");
  body.set("btnSearch", "Search");
  let billResponse = await officialRequest(billUrl, {
    method: "POST",
    headers: { ...headers, cookie, "content-type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  const redirectLocation = billResponse.headers.location;
  if ([301, 302, 303, 307, 308].includes(billResponse.status) && typeof redirectLocation === "string") {
    billResponse = await officialRequest(resolveOfficialUrl(billUrl, redirectLocation), {
      headers: { ...headers, cookie, referer: billUrl },
    });
  }
  if (!billResponse.ok) throw new Error("The official bill system did not return a successful response.");
  const billHtml = billResponse.text;
  if (billHtml.includes("Search Your Electricity Bill") && !billHtml.includes("BILL MONTH")) {
    throw new Error("No printable bill was returned for this reference number.");
  }
  return rewriteBillHtml(billHtml);
}
