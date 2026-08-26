import { ABOUT } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import { Crescent, Underline, CashewScatter } from '../Sketch';

export default function AboutSection() {
  const [ref, visible] = useReveal({ threshold: 0.15 });

  return (
    <section className="section section--white" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <span className="eyebrow"><Crescent size={18} variant="solid" rough={false} />{ABOUT.eyebrow}</span>
            <h2 className="title" style={{ marginTop: 14 }}>
              A family cashew{' '}
              <span className="title-underline"><span className="accent">house</span><Underline /></span>
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>{ABOUT.body}</p>
            <div style={{ marginTop: 30 }}><CashewScatter /></div>
          </div>

          <div className="about__points" ref={ref}>
            {ABOUT.points.map((p, i) => (
              <div className={`point reveal ${visible ? 'is-visible' : ''}`} style={{ '--i': i }} key={p.title}>
                <h3 className="point__title">
                  <Crescent size={16} variant="solid" rough={false} />{p.title}
                </h3>
                <p className="point__body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
