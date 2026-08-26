// Inline SVG icons. Sized via the `.ic` class from CSS (parent controls size);
// pass extra classes as needed. All use currentColor.
const S = ({ children, stroke, className = '', viewBox = '0 0 24 24' }) => (
  <svg className={`ic ${className}`} viewBox={viewBox} fill={stroke ? 'none' : 'currentColor'}
       stroke={stroke ? 'currentColor' : undefined} strokeWidth={stroke ? 1.8 : undefined}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

export const WhatsAppIcon = (p) => (
  <S {...p}><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.2 4.79 1.2h.004c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.02-5.14-2.9-7.01M12.04 20.15h-.003a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.12.25-.3.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01s-.43.06-.66.3c-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.74 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.2-.57.2-1.07.14-1.17-.06-.11-.22-.18-.47-.3" /></S>
);
export const PhoneIcon = (p) => (
  <S {...p}><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.68-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z" /></S>
);
export const MailIcon = (p) => (
  <S {...p}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z" /></S>
);
export const InstagramIcon = (p) => (
  <S stroke {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></S>
);
export const MapPinIcon = (p) => (
  <S {...p}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" /></S>
);
export const GlobeIcon = (p) => (
  <S stroke {...p}><circle cx="12" cy="12" r="9.2" /><path d="M3 12h18M12 2.8c2.6 2.5 2.6 15.9 0 18.4M12 2.8c-2.6 2.5-2.6 15.9 0 18.4" /></S>
);
export const ArrowRight = (p) => (<S stroke {...p}><path d="M5 12h14M13 6l6 6-6 6" /></S>);
export const ArrowDown = (p) => (<S stroke {...p}><path d="M12 5v14M6 13l6 6 6-6" /></S>);
export const MenuIcon = (p) => (<S stroke {...p}><path d="M4 7h16M4 12h16M4 17h16" /></S>);
export const CloseIcon = (p) => (<S stroke {...p}><path d="M6 6l12 12M18 6 6 18" /></S>);
