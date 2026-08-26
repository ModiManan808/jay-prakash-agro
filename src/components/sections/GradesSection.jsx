import { GRADES, ENQUIRY_MESSAGE, BRAND } from '../../data/content';
import { waLink } from '../../lib/links';
import { useReveal } from '../../hooks/useReveal';
import { Crescent, Underline, SectionMark, SketchArrow } from '../Sketch';

const PREMIUM = ['W180', 'W210'];

export default function GradesSection() {
  const [ref, visible] = useReveal({ threshold: 0.15 });
  const primary = BRAND.contacts[0];

  return (
    <section className="section section--white" id="grades">
      <SectionMark pos="tr" />
      <div className="container">
        <div className="section__head">
          <span className="eyebrow"><Crescent size={18} variant="solid" rough={false} />Grades</span>
          <h2 className="title" style={{ marginTop: 14 }}>
            Sorted by size,{' '}
            <span className="title-underline"><span className="accent">not guesswork</span><Underline /></span>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            The W-number is the count of whole kernels per pound. Fewer kernels means a
            larger, more prized nut. We supply the full range, plus scorched wafers and pieces.
          </p>
        </div>

        <div className="grades__grid" ref={ref}>
          {GRADES.map((g, i) => (
            <article
              className={`grade reveal ${visible ? 'is-visible' : ''}`}
              style={{ '--i': i }}
              key={g.code}
            >
              <div className="grade__top">
                <span className="grade__code display">{g.code}</span>
                {PREMIUM.includes(g.code) && <span className="grade__badge">Premium</span>}
              </div>
              {g.perLb && (
                <div className="grade__count">~{g.perLb} <span className="u">kernels / lb</span></div>
              )}
              <p className="grade__note">{g.note}</p>
              {/* On-brand cashew watermark */}
              <span className="grade__watermark" aria-hidden="true">
                <Crescent size={60} variant="line" strokeWidth={2} rough={false} />
              </span>
            </article>
          ))}
        </div>

        <p className="grades__foot">
          Need a specific grade mix, MOQ or price?{' '}
          <a href={waLink(primary.phone, ENQUIRY_MESSAGE)} target="_blank" rel="noopener noreferrer">
            Ask us on WhatsApp <SketchArrow dir="right" />
          </a>.
        </p>
      </div>
    </section>
  );
}
