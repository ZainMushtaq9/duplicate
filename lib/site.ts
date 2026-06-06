export const site = {
  name: "BijliHelp PK",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bijlihelp.pk",
  description:
    "Independent Pakistan electricity customer help for MEPCO duplicate bills, PITC complaint registration, feeder details, and complaint tracking.",
};

export const billCompanies = [
  { company: "MEPCO", slug: "mepco-duplicate-bill", area: "Multan and south Punjab", url: "https://bill.pitc.com.pk/mepcobill" },
  { company: "LESCO", slug: "lesco-duplicate-bill", area: "Lahore region", url: "https://bill.pitc.com.pk/lescobill" },
  { company: "FESCO", slug: "fesco-duplicate-bill", area: "Faisalabad region", url: "https://bill.pitc.com.pk/fescobill" },
  { company: "GEPCO", slug: "gepco-duplicate-bill", area: "Gujranwala region", url: "https://bill.pitc.com.pk/gepcobill" },
  { company: "IESCO", slug: "iesco-duplicate-bill", area: "Islamabad and Rawalpindi region", url: "https://bill.pitc.com.pk/iescobill" },
  { company: "PESCO", slug: "pesco-duplicate-bill", area: "Peshawar and Khyber Pakhtunkhwa areas", url: "https://bill.pitc.com.pk/pescobill" },
  { company: "QESCO", slug: "qesco-duplicate-bill", area: "Quetta and Balochistan areas", url: "https://bill.pitc.com.pk/qescobill" },
  { company: "HESCO", slug: "hesco-duplicate-bill", area: "Hyderabad region", url: "https://bill.pitc.com.pk/hescobill" },
  { company: "SEPCO", slug: "sepco-duplicate-bill", area: "Sukkur region", url: "https://bill.pitc.com.pk/sepcobill" },
  { company: "TESCO", slug: "tesco-duplicate-bill", area: "Tribal areas", url: "https://bill.pitc.com.pk/tescobill" },
  { company: "AJK", slug: "ajk-electricity-bill", area: "Azad Jammu and Kashmir", url: "https://bill.pitc.com.pk/ajkbill" },
] as const;

export const servicePages = [
  { title: "Register Complaint", href: "/pitc-services/register-complaint", description: "Register electricity complaints with category and subcategory guidance." },
  { title: "Duplicate Bills", href: "/pitc-services/duplicate-bills", description: "Open customer bill pages for MEPCO and other PITC companies." },
  { title: "Track by Reference", href: "/pitc-services/track-by-reference", description: "Track complaint history using a customer reference number." },
  { title: "Track by Ticket", href: "/pitc-services/track-by-ticket", description: "Track complaint status using a CCMS ticket number." },
  { title: "Feeder Details", href: "/pitc-services/feeder-details", description: "Check feeder, grid, and load management information." },
] as const;

export const resourcePages = [
  {
    title: "MEPCO Bill Payment Guide",
    slug: "mepco-bill-payment",
    cluster: "Payment",
    description: "Original guide to MEPCO bill payment options, payment status checks, and safe bill handling.",
    keywords: ["MEPCO bill payment", "pay MEPCO bill online", "MEPCO payment status"],
    sections: [
      ["How MEPCO bill payment works", "Customers should always confirm payable amount, due date, and late payment surcharge from the official bill result before paying."],
      ["Payment safety checklist", "Use trusted banking apps, official payment channels, and keep screenshots or receipts until the payment reflects."],
      ["After payment", "If payment does not appear immediately, wait for bank/PITC synchronization and keep your reference number and receipt ready."],
    ],
    faqs: [
      ["Can I pay MEPCO bill without reference number?", "Most payment channels require a reference number or customer ID to find the account."],
      ["Where should I confirm the latest amount?", "Confirm the latest payable amount on the official PITC bill result before payment."],
    ],
  },
  {
    title: "MEPCO Helpline and Support Guide",
    slug: "mepco-helpline",
    cluster: "Support",
    description: "Customer support guide for MEPCO complaints, emergency reporting, and service follow-up.",
    keywords: ["MEPCO helpline", "MEPCO support", "MEPCO complaint number"],
    sections: [
      ["When to contact support", "Contact support for unsafe wires, transformer faults, billing disputes, theft reports, and unresolved complaints."],
      ["What to prepare", "Keep reference number, mobile number, nearest landmark, complaint category, and prior ticket number ready."],
      ["Escalation path", "Start with complaint registration, then track by ticket number and reference number for follow-up."],
    ],
    faqs: [
      ["What information is needed for MEPCO complaint?", "Reference number, name, mobile number, nearest place, complaint category, type, and details are usually needed."],
      ["Can I track a complaint later?", "Yes, use the complaint ticket number or customer reference number to track status."],
    ],
  },
  {
    title: "MEPCO New Connection Guide",
    slug: "mepco-new-connection",
    cluster: "New Connection",
    description: "Step-by-step planning guide for new connection, reconnection, load change, and related MEPCO requests.",
    keywords: ["MEPCO new connection", "MEPCO reconnection", "change sanctioned load MEPCO"],
    sections: [
      ["New connection intent", "Customers looking for a new meter need application guidance, documents, site details, and follow-up tracking."],
      ["Request categories", "New Connection, Reconnection, Temporary Connection, Change of Sanctioned Load, and Net Metering are request-type categories."],
      ["Customer preparation", "Prepare identity details, property/site information, contact number, and nearest landmark before starting."],
    ],
    faqs: [
      ["Is new connection a complaint type?", "It belongs under Leads / Requests / Others rather than ordinary line-fault complaints."],
      ["What details help avoid delays?", "Correct address, mobile number, nearest place, and accurate request type help reduce back-and-forth."],
    ],
  },
  {
    title: "MEPCO Bill Calculator Guide",
    slug: "mepco-bill-calculator",
    cluster: "Calculator",
    description: "Understand units, taxes, due date, late surcharge, and why calculated bills may differ from official PITC bills.",
    keywords: ["MEPCO bill calculator", "MEPCO unit calculator", "electricity bill estimate"],
    sections: [
      ["Calculator limitations", "A calculator can estimate usage cost, but the official bill includes taxes, adjustments, arrears, fuel price changes, and surcharges."],
      ["Useful inputs", "Units consumed, tariff category, meter type, billing month, and prior arrears influence the final amount."],
      ["Best practice", "Use a calculator for planning and use the official duplicate bill for payment."],
    ],
    faqs: [
      ["Is a calculator amount final?", "No. The official PITC bill result is the source for payable amount and due date."],
      ["Why can estimate and official bill differ?", "Taxes, arrears, tariff slabs, and adjustments can change the final payable amount."],
    ],
  },
  {
    title: "MEPCO Reference Number Guide",
    slug: "reference-number-guide",
    cluster: "Reference Help",
    description: "Find and use the 14 digit MEPCO reference number for duplicate bill checks, complaint registration, and tracking.",
    keywords: ["MEPCO reference number", "14 digit reference number", "where is reference number on MEPCO bill"],
    sections: [
      ["What it is", "The reference number identifies an electricity customer account in PITC bill and complaint systems."],
      ["Where it appears", "It is printed on the electricity bill, usually near the top account or customer information area."],
      ["How it is used", "Use it for duplicate bill lookup, complaint registration, and complaint history tracking."],
    ],
    faqs: [
      ["How many digits are in MEPCO reference number?", "The standard reference number used for bill lookup is 14 digits."],
      ["Can it be used for complaints?", "Yes, the same reference number is commonly used to find customer account details for complaint registration."],
    ],
  },
] as const;

export const trustPages = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms", href: "/terms" },
  { title: "Disclaimer", href: "/disclaimer" },
  { title: "Backlink Resources", href: "/backlink-resources" },
  { title: "Ad Places and Earnings", href: "/ad-places" },
] as const;

export const mepcoFaqs = [
  {
    question: "How do I check my MEPCO bill online?",
    answer:
      "Enter the 14 digit reference number printed on your electricity bill. BijliHelp PK submits the request to the official PITC MEPCO bill system from the backend and shows a printable bill result on this website.",
  },
  {
    question: "Where is the MEPCO reference number printed?",
    answer:
      "The reference number is usually printed near the top section of the electricity bill. It is a 14 digit number used by PITC bill systems to find the customer account.",
  },
  {
    question: "Can I print the duplicate bill?",
    answer:
      "Yes. After the bill loads, use the Print Bill button to print the official bill result area without the website header and navigation.",
  },
  {
    question: "Is BijliHelp PK an official MEPCO website?",
    answer:
      "No. BijliHelp PK is an independent customer-help website. It uses official PITC bill sources and links customers to official complaint and tracking services.",
  },
];

export const keywords = [
  { keyword: "MEPCO bill", intent: "Transactional", cluster: "Duplicate bill", pageType: "Landing page", priority: 100 },
  { keyword: "MEPCO duplicate bill", intent: "Transactional", cluster: "Duplicate bill", pageType: "Landing page", priority: 98 },
  { keyword: "MEPCO bill online check by reference number", intent: "Transactional", cluster: "Duplicate bill", pageType: "Tool page", priority: 96 },
  { keyword: "print MEPCO bill", intent: "Transactional", cluster: "Printable bill", pageType: "Result page", priority: 88 },
  { keyword: "MEPCO complaint registration", intent: "Commercial/Support", cluster: "Complaint", pageType: "Service page", priority: 84 },
  { keyword: "PITC complaint tracking", intent: "Support", cluster: "Tracking", pageType: "Service page", priority: 80 },
  { keyword: "MEPCO feeder details", intent: "Informational", cluster: "Feeder", pageType: "Service page", priority: 76 },
  { keyword: "where is reference number on MEPCO bill", intent: "Informational", cluster: "Reference help", pageType: "Guide", priority: 74 },
];
