import { BRAND, ENQUIRY_MESSAGE } from '../../data/content';
import { waLink } from '../../lib/links';
import { Crescent, Underline, SketchArrow } from '../Sketch';
import { WhatsAppIcon } from '../Icons';

const CHIPS = [
  'Importer & Exporter',
  'Grades W180 to W320',
  'Sealed the day it\u2019s graded',
  '15 kg bulk & export',
];

export default function Hero() {
  const primary = BRAND.contacts[0];

  return (
    <header className="hero" id="top">
      {/* Primary cashew mark — large, slow float */}
      <div className="hero__mark" aria-hidden="true">
        <Crescent size={440} variant="line" strokeWidth={3.2} />
      </div>
      {/* Secondary mark — smaller, offset, faster drift for depth */}
      <div className="hero__mark hero__mark--secondary" aria-hidden="true">
        <Crescent size={180} variant="line" strokeWidth={2.4} />
      </div>

      <div className="container hero__inner">
        <span className="eyebrow hero__eyebrow anim">
          <Crescent size={18} variant="solid" rough={false} />
          Cashew manufacturer · Banaskantha, Gujarat
        </span>

        <h1 className="hero__title display anim">
          <span className="ln">One nut,</span>
          <span className="ln">every stage</span>
          <span className="ln title-underline">
            <span className="green">in-house.</span>
            <Underline strokeWidth={4} />
          </span>
        </h1>

        <p className="hero__sub anim">
          {BRAND.name} roasts, shells, peels, grades and packs cashew kernels under
          one roof, from jumbo W180 to large white pieces, for wholesale, retail
          and export buyers.
        </p>

        <div className="hero__cta anim">
          <a className="btn btn--wa btn--lg" href={waLink(primary.phone, ENQUIRY_MESSAGE)}
             target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Enquire on WhatsApp
          </a>
          <a className="btn btn--ghost btn--lg" href="#grades">
            Browse grades <SketchArrow dir="down" />
          </a>
        </div>

        <div className="hero__chips anim">
          {CHIPS.map((c) => (
            <span className="hero__chip" key={c}><span className="dot" />{c}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
