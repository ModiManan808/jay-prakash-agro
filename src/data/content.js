// ============================================================================
// ALL EDITABLE BUSINESS CONTENT LIVES HERE.
// Change text, numbers, colors below. No need to touch component files.
// ============================================================================

export const BRAND = {
  name: "Jay Prakash Agro",
  tagline: "Cashew Product · Importer & Exporter",
  domain: "www.jayprakashagro.com",
  email: "agrojayprakash@gmail.com",
  instagram: "jayprakashagro_cashewnuts",
  address: "Plot No. 109, G.I.D.C. Chandisar, Palanpur - Deesa Highway, Dist: Banaskantha",
  contacts: [
    { name: "Darshan Modh", phone: "+91 99988 41169" },
    { name: "Jayprakash Modh", phone: "+91 99797 46167" }
  ]
};

// White & Green brand palette — Jay Prakash Agro.
export const COLORS = {
  bgDeep:   "#080f09",     // deep forest-green black
  green900: "#0f2212",
  green700: "#2a7a3b",     // primary brand green
  green400: "#5db874",     // lighter accent green
  white:    "#f0f5f0",     // clean white
  cashew:   "#F8D3A7",     // cashew nut colour (warm accent)
  textMuted:"#8aab8e"
};

export const GRADES = [
  { code: "W180", perLb: "~180", note: "Jumbo, top-tier, limited volume" },
  { code: "W210", perLb: "~210", note: "Large whole, premium export" },
  { code: "W240", perLb: "~240", note: "Most common whole grade" },
  { code: "W320", perLb: "~320", note: "Standard whole, everyday retail" },
  { code: "SW", perLb: "", note: "Scorched Wafers, whole, lightly toasted" },
  { code: "LWP", perLb: "", note: "Large White Pieces for snacking & confectionery" }
];

export const PROCESS_STAGES = [
  {
    id: "harvest",
    eyebrow: "Stage 01 · Harvest",
    title: "Picked ripe, dried in the sun",
    body: "Cashews are harvested from February to May, separated from the cashew apple, and sun-dried for 2-3 days to bring moisture down before storage."
  },
  {
    id: "roast",
    eyebrow: "Stage 02 · Roasting",
    title: "Heat loosens the shell",
    body: "Roasting softens the hard outer shell and releases the corrosive cashew shell liquid, making the kernel safe to extract without damaging it."
  },
  {
    id: "shell",
    eyebrow: "Stage 03 · Shelling",
    title: "The kernel comes free",
    body: "Each shell is cracked to release the kernel whole. A single broken shell can nick the nut inside, so this step happens slowly, one at a time."
  },
  {
    id: "peel",
    eyebrow: "Stage 04 · Peeling",
    title: "Brown testa, white kernel",
    body: "After a short drying cycle, the thin brown skin (testa) is peeled away, revealing the ivory-white kernel buyers recognize as a finished cashew."
  },
  {
    id: "grade",
    eyebrow: "Stage 05 · Grading",
    title: "Sorted by count, not by eye",
    body: "Kernels are graded to the international whole-cashew count (W180 to W320), plus scorched wafers and large white pieces, so every order is consistent."
  },
  {
    id: "pack",
    eyebrow: "Stage 06 · Packing",
    title: "Sealed within hours",
    body: "Graded kernels are packed within hours into retail pouches or 15 kg bulk buckets, locking in crunch and shelf life before a single pack leaves the floor."
  }
];

export const BULK = {
  eyebrow: "Bulk & Wholesale",
  title: "15 kg buckets for bulk orders",
  body: "Beyond retail pouches, we pack in 15 kg buckets for wholesale, catering, and export partners who need volume without compromising on freshness.",
  note: "Photo of the actual 15kg bucket pending — swap in real product shot when ready."
};

// ── Packaging (the purple + cashew-cream moment) ─────────────────────────────
// NOTE: retail pouch sizes below are sensible defaults — confirm the actual
// sizes you sell and edit this list. Everything else is factual.
export const PACKAGING = {
  eyebrow: "Packaging",
  title: "Sealed the day it's graded",
  body: "Our retail pouches carry the kernel in a purple-and-cream pack built to protect crunch and aroma. For volume buyers, the same freshness ships in 15 kg bulk buckets and export cartons.",
  retail: {
    label: "Retail pouches",
    note: "Purple + cashew-cream pack",
    sizes: ["100 g", "250 g", "500 g", "1 kg"]
  },
  bulk: {
    label: "Bulk & export",
    note: "For wholesale, catering & importers",
    sizes: ["15 kg bucket", "Export cartons on request"]
  }
};

// ── Why buyers choose us (all factual, drawn from the process) ────────────────
export const ABOUT = {
  eyebrow: "Why Jay Prakash Agro",
  title: "A family cashew house in Banaskantha",
  body: "Run by the Modh family from GIDC Chandisar on the Palanpur-Deesa highway, we take a single raw cashew through every stage: roasting, shelling, peeling, grading and packing, and seal it while it's fresh.",
  points: [
    { title: "Every stage in-house", body: "Roasted, shelled, peeled, graded and packed under one roof, so quality is ours to answer for, end to end." },
    { title: "Packed within hours", body: "Kernels are sealed within hours of grading, locking in crunch and shelf life before a pouch leaves the floor." },
    { title: "Import & export ready", body: "Six whole and split grades, retail pouches to 15 kg bulk, supplied to distributors, retailers and importers." },
    { title: "Graded by real count", body: "Sorted to the international whole-cashew count (W180 to W320), plus scorched wafers and large white pieces." }
  ]
};

export const SEO = {
  title: "Jay Prakash Agro | Premium Cashew Nuts | Wholesale & Export, Banaskantha",
  description: "Jay Prakash Agro, cashew manufacturer, importer & exporter in GIDC Chandisar, Banaskantha, Gujarat. Whole grades W180 to W320, scorched wafers & pieces, retail pouches to 15 kg bulk. Enquire on WhatsApp."
};

export const NAV = [
  { label: "Grades", href: "#grades" },
  { label: "Process", href: "#process" },
  { label: "Packaging", href: "#packaging" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

// Default prefilled message for WhatsApp / email enquiries.
export const ENQUIRY_MESSAGE =
  "Hello Jay Prakash Agro, I'd like to enquire about your cashew nuts (grades / pricing / bulk). ";
