import { PACKAGING, BRAND, ENQUIRY_MESSAGE } from '../../data/content';
import { waLink } from '../../lib/links';
import { useReveal } from '../../hooks/useReveal';
import { Crescent, Underline, Pouch, SectionMark, SketchArrow } from '../Sketch';
import { WhatsAppIcon } from '../Icons';

export default function PackagingSection() {
  const [ref, visible] = useReveal({ threshold: 0.15 });
  const primary = BRAND.contacts[0];
  const { retail, bulk } = PACKAGING;

  return (
    <section className="section section--purple" id="packaging">
      <SectionMark pos="bl" />
      <div className="container">
        <div className="section__head">
          <span className="eyebrow"><Crescent size={18} variant="solid" rough={false} />{PACKAGING.eyebrow}</span>
          <h2 className="title" style={{ marginTop: 14 }}>
            Sealed the day{' '}
            <span className="title-underline"><span className="accent">it&rsquo;s graded</span><Underline /></span>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>{PACKAGING.body}</p>
        </div>

        <div className="pack__grid" ref={ref}>
          <article className={`pack__card pack__card--retail reveal ${visible ? 'is-visible' : ''}`} style={{ '--i': 0 }}>
            <Pouch />
            <span className="pack__label"><Crescent size={15} variant="solid" rough={false} />{retail.label}</span>
            <h3 className="pack__title">{retail.note}</h3>
            <p className="pack__note">Grab-and-go sizes for shops, gifting and home.</p>
            <div className="pack__sizes">
              {retail.sizes.map((s) => <span className="chip" key={s}>{s}</span>)}
            </div>
          </article>

          <article className={`pack__card pack__card--bulk reveal ${visible ? 'is-visible' : ''}`} style={{ '--i': 1 }}>
            <span className="pack__label"><Crescent size={15} variant="solid" rough={false} />{bulk.label}</span>
            <h3 className="pack__title">{bulk.note}</h3>
            <p className="pack__note">The same freshness, packed for volume and shipping.</p>
            <div className="pack__sizes">
              {bulk.sizes.map((s) => <span className="chip" key={s}>{s}</span>)}
            </div>
          </article>
        </div>

        <div style={{ marginTop: 28 }}>
          <a className="btn btn--wa btn--lg" href={waLink(primary.phone, ENQUIRY_MESSAGE)}
             target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Ask for pack sizes &amp; pricing <SketchArrow dir="right" />
          </a>
        </div>
      </div>
    </section>
  );
}
