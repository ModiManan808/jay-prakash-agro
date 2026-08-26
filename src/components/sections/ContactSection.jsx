import { BRAND, ENQUIRY_MESSAGE } from '../../data/content';
import { telLink, waLink, mailLink, mapsLink, instagramLink } from '../../lib/links';
import { useReveal } from '../../hooks/useReveal';
import { Crescent, Underline, SectionMark } from '../Sketch';
import { PhoneIcon, WhatsAppIcon, MailIcon, InstagramIcon, MapPinIcon } from '../Icons';

export default function ContactSection() {
  const [ref, visible] = useReveal({ threshold: 0.12 });

  return (
    <section className="section section--green" id="contact">
      <SectionMark pos="tr" />
      <div className="container">
        <div className="section__head">
          <span className="eyebrow"><Crescent size={18} variant="solid" rough={false} />Contact</span>
          <h2 className="title" style={{ marginTop: 14 }}>
            Let&rsquo;s talk{' '}
            <span className="title-underline"><span className="accent">cashews</span><Underline /></span>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Prices, grades, sample packs or bulk orders: reach any of us directly.
            WhatsApp is fastest.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__cards" ref={ref}>
            {BRAND.contacts.map((c, i) => (
              <div className={`contact__card reveal ${visible ? 'is-visible' : ''}`} style={{ '--i': i }} key={c.phone}>
                <div>
                  <div className="contact__name display">{c.name}</div>
                  <div className="contact__role">{c.phone}</div>
                </div>
                <div className="contact__actions">
                  <a className="iconbtn iconbtn--call" href={telLink(c.phone)} aria-label={`Call ${c.name}`}>
                    <PhoneIcon /> Call
                  </a>
                  <a className="iconbtn iconbtn--wa" href={waLink(c.phone, ENQUIRY_MESSAGE)}
                     target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${c.name}`}>
                    <WhatsAppIcon /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="contact__info">
            <p className="contact__addr">{BRAND.address}</p>
            <div className="contact__meta">
              <a href={mapsLink(BRAND.address)} target="_blank" rel="noopener noreferrer">
                <MapPinIcon /> Find us on the map
              </a>
              <a href={mailLink(BRAND.email, 'Cashew enquiry', ENQUIRY_MESSAGE)}>
                <MailIcon /> {BRAND.email}
              </a>
              <a href={instagramLink(BRAND.instagram)} target="_blank" rel="noopener noreferrer">
                <InstagramIcon /> @{BRAND.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
