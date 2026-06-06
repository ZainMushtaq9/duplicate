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

function extractCookies(headers: Headers) {
  const withGetter = headers as Headers & { getSetCookie?: () => string[] };
  const setCookies = typeof withGetter.getSetCookie === "function" ? withGetter.getSetCookie() : [];
  const fallback = headers.get("set-cookie");
  const rawCookies = setCookies.length ? setCookies : fallback ? fallback.split(/,(?=\s*[^;,\s]+=)/) : [];
  return rawCookies
    .map((cookie) => cookie.split(";")[0].trim())
    .filter(Boolean)
    .join("; ");
}

export async function fetchPitcBill(billUrl: string, reference: string) {
  const headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125.0 Safari/537.36",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    referer: billUrl,
  };
  const formResponse = await fetch(billUrl, { headers, cache: "no-store" });
  if (!formResponse.ok) throw new Error("Could not load the official bill form.");
  const formHtml = await formResponse.text();
  const cookie = extractCookies(formResponse.headers);
  const body = parseInputs(formHtml);
  body.set("rbSearchByList", "refno");
  body.set("searchTextBox", reference);
  body.set("ruCodeTextBox", "");
  body.set("btnSearch", "Search");
  const billResponse = await fetch(billUrl, {
    method: "POST",
    headers: { ...headers, cookie, "content-type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
    redirect: "follow",
  });
  if (!billResponse.ok) throw new Error("The official bill system did not return a successful response.");
  const billHtml = await billResponse.text();
  if (billHtml.includes("Search Your Electricity Bill") && !billHtml.includes("BILL MONTH")) {
    throw new Error("No printable bill was returned for this reference number.");
  }
  return rewriteBillHtml(billHtml);
}
