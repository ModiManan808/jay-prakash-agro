import { useReveal } from '../../hooks/useReveal';
import { SketchCircle } from '../Sketch';

const STATS = [
  { value: '6', label: 'Whole & split grades, W180 to W320, plus SW & LWP' },
  { value: 'Same-day', label: 'Sealed within hours of grading for freshness' },
  { value: '15 kg', label: 'Bulk buckets for wholesale, catering & export' },
  { value: 'Banaskantha', label: 'GIDC Chandisar, Gujarat, India' },
];

export default function Stats() {
  const [ref, visible] = useReveal({ threshold: 0.3 });
  return (
    <section className="section section--white">
      <div className="container">
        <div className={`stats reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {STATS.map((s, i) => (
            <div className="stat" key={s.value}>
              <div className="stat__value display">
                {i === 0
                  ? <span className="circled">{s.value}<SketchCircle /></span>
                  : s.value}
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
