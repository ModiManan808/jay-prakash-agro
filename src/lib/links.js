// Small helpers for one-tap contact actions.
// Phone numbers in content.js are stored human-readable ("+91 99797 46167");
// these normalize them for tel:/wa.me links.

const digits = (phone) => phone.replace(/[^\d]/g, ""); // "919979746167"

export function telLink(phone) {
  return `tel:+${digits(phone)}`;
}

export function waLink(phone, message = "") {
  const base = `https://wa.me/${digits(phone)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailLink(email, subject = "", body = "") {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${email}${qs ? `?${qs}` : ""}`;
}

export function mapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function instagramLink(handle) {
  return `https://instagram.com/${handle.replace(/^@/, "")}`;
}
