import { BRAND, NAV } from '../data/content';
import { Crescent, SketchDivider } from './Sketch';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__rule"><SketchDivider /></div>
        <div className="footer__row">
          <div>
            <div className="footer__brand">
              <Crescent size={22} strokeWidth={6} />
              {BRAND.name}
            </div>
            <p className="footer__line" style={{ marginTop: 10 }}>
              Cashew manufacturer, importer &amp; exporter · GIDC Chandisar,
              Banaskantha, Gujarat, India.
            </p>
          </div>

          <nav className="footer__links" aria-label="Footer">
            {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
        </div>

        <div className="footer__copy">
          © {BRAND.name} · {BRAND.domain} · All rights reserved.
        </div>
      </div>
    </footer>
  );
}
