import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { COLORS, FONTS, FONT_SIZES, SOCIAL } from '../config/theme';
import { useScrollReveal, slideUp, slideLeft, slideRight } from './animations';

const socialLinks = [
  { icon: FaFacebookF,  href: SOCIAL.facebook,  label: 'Facebook',  color: '#1877F2' },
  { icon: FaInstagram,  href: SOCIAL.instagram,  label: 'Instagram', color: '#E1306C' },
  { icon: FaTiktok,     href: SOCIAL.tiktok,     label: 'TikTok',    color: '#FFFFFF' },
  { icon: FaWhatsapp,   href: SOCIAL.whatsapp,   label: 'WhatsApp',  color: '#25D366' },
];

function InputField({ label, type = 'text', name, placeholder, multiline }) {
  const [focused, setFocused] = useState(false);

  const baseStyle = {
    width: '100%', background: COLORS.black,
    border: `1px solid ${focused ? COLORS.crimson : COLORS.borderDark}`,
    color: COLORS.white, fontFamily: FONTS.body, fontSize: '1rem',
    padding: '14px 16px', outline: 'none',
    transition: 'border-color 0.25s',
    resize: 'none',
  };

  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{
        display: 'block', fontFamily: FONTS.accent, fontSize: '0.7rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: focused ? COLORS.gold : COLORS.muted, marginBottom: '0.5rem',
        transition: 'color 0.25s',
      }}>
        {label}
      </label>
      {multiline ? (
        <textarea rows={5} name={name} placeholder={placeholder}
          style={baseStyle}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      ) : (
        <input type={type} name={name} placeholder={placeholder}
          style={baseStyle}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      )}
    </div>
  );
}

export default function Contact() {
  const { ref, inView } = useScrollReveal(0.15);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1500);
  };

  return (
    <section id="contact" ref={ref} style={{
      background: COLORS.black, padding: '8rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: '0', right: '0',
        width: '500px', height: '500px',
        background: `radial-gradient(ellipse, ${COLORS.crimson}18 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.p className="section-label"
          variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Get In Touch
        </motion.p>

        <motion.h2 variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: FONTS.display, fontSize: FONT_SIZES.h1,
            color: COLORS.white, textAlign: 'center', textTransform: 'uppercase',
            letterSpacing: '0.08em', marginBottom: '1rem',
          }}>
          Contact <span style={{ color: COLORS.gold }}>Us</span>
        </motion.h2>

        <motion.p variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: FONTS.body, color: COLORS.muted, textAlign: 'center',
            maxWidth: '500px', margin: '0 auto 5rem', fontSize: '1rem', lineHeight: 1.7,
          }}>
          Interested in a match, a partnership, or joining the family?
          Reach out — we respond to every message.
        </motion.p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'start',
        }}>
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div style={{
              width: '48px', height: '3px',
              background: `linear-gradient(90deg, ${COLORS.crimson}, ${COLORS.gold})`,
              marginBottom: '2.5rem',
            }} />

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaMapMarkerAlt style={{ color: COLORS.crimson, marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: FONTS.display, fontSize: '0.8rem', letterSpacing: '0.1em', color: COLORS.white, marginBottom: '0.25rem', textTransform: 'uppercase' }}>Location</p>
                  <p style={{ fontFamily: FONTS.body, color: COLORS.muted }}>Wattala, Western Province, Sri Lanka</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <FaEnvelope style={{ color: COLORS.crimson, marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: FONTS.display, fontSize: '0.8rem', letterSpacing: '0.1em', color: COLORS.white, marginBottom: '0.25rem', textTransform: 'uppercase' }}>Email</p>
                  <p style={{ fontFamily: FONTS.body, color: COLORS.muted }}>marrowcc@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <p style={{
                fontFamily: FONTS.accent, fontSize: '0.7rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: COLORS.subtle, marginBottom: '1.25rem',
              }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    style={{
                      width: '44px', height: '44px',
                      border: `1px solid ${COLORS.borderDark}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: COLORS.muted, fontSize: '1rem',
                      background: COLORS.cardBg, transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.color = color;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = COLORS.borderDark;
                      e.currentTarget.style.color = COLORS.muted;
                    }}>
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '3rem', textAlign: 'center',
                  border: `1px solid ${COLORS.gold}30`,
                  background: `${COLORS.gold}08`,
                }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: FONTS.display, fontSize: '1.3rem', letterSpacing: '0.1em', color: COLORS.gold, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Message Sent
                </h3>
                <p style={{ fontFamily: FONTS.body, color: COLORS.muted }}>
                  We'll get back to you shortly. One team, one bond.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <InputField label="Full Name" name="name" placeholder="Your name" />
                <InputField label="Email Address" type="email" name="email" placeholder="your@email.com" />
                <InputField label="Subject" name="subject" placeholder="Match request, partnership..." />
                <InputField label="Message" name="message" placeholder="Tell us more..." multiline />
                <motion.button type="submit"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  disabled={sending}
                  style={{
                    width: '100%', padding: '15px',
                    background: sending ? COLORS.subtle : COLORS.crimson,
                    border: 'none', color: COLORS.white, cursor: sending ? 'not-allowed' : 'pointer',
                    fontFamily: FONTS.display, fontSize: '0.8rem', letterSpacing: '0.2em',
                    textTransform: 'uppercase', transition: 'background 0.25s',
                    boxShadow: sending ? 'none' : `0 0 30px ${COLORS.crimson}40`,
                  }}>
                  {sending ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
