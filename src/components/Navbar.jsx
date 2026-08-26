import { useEffect, useState } from 'react';
import { BRAND, NAV, ENQUIRY_MESSAGE } from '../data/content';
import { waLink } from '../lib/links';
import { Crescent } from './Sketch';
import { WhatsAppIcon, MenuIcon, CloseIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const primary = BRAND.contacts[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a className="nav__brand" href="#top" aria-label={`${BRAND.name}, home`}>
          <Crescent size={30} strokeWidth={6} />
          <span>
            <span className="name display">{BRAND.name}</span>
            <span className="sub">Importer &amp; Exporter</span>
          </span>
        </a>

        <ul className="nav__links">
          {NAV.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <div className="nav__actions">
          <a className="btn btn--ghost" href="#contact">Contact</a>
          <a className="btn btn--wa" href={waLink(primary.phone, ENQUIRY_MESSAGE)}
             target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Enquire
          </a>
          <button className="nav__toggle" aria-label="Open menu" aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div className={`nav__drawer ${open ? 'open' : ''}`}>
        {NAV.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </>
  );
}
