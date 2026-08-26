import { PROCESS_STAGES } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import { Crescent, Underline, SectionMark } from '../Sketch';

// "Stage 01 · Harvest" → "Harvest"
const nameOf = (eyebrow) => eyebrow.split('·').pop().trim();

export default function ProcessSection() {
  const [ref, visible] = useReveal({ threshold: 0.1 });

  return (
    <section className="section section--cream" id="process">
      <SectionMark pos="bl" />
      <div className="container">
        <div className="section__head">
          <span className="eyebrow"><Crescent size={18} variant="solid" rough={false} />The process</span>
          <h2 className="title" style={{ marginTop: 14 }}>
            From raw cashew to{' '}
            <span className="title-underline"><span className="accent">sealed pouch</span><Underline /></span>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            One nut, six stages, all under our own roof in Banaskantha.
          </p>
        </div>

        <div className="process__list" ref={ref}>
          {PROCESS_STAGES.map((s, i) => (
            <div
              className={`step reveal ${visible ? 'is-visible' : ''}`}
              style={{ '--i': i }}
              key={s.id}
            >
              <div className="step__num">
                <Crescent size={16} variant="solid" rough={false} />
                {String(i + 1).padStart(2, '0')} · {nameOf(s.eyebrow)}
              </div>
              <h3 className="step__title display">{s.title}</h3>
              <p className="step__body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
