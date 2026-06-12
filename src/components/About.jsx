import React from 'react';
import { motion } from 'framer-motion';
import { COLORS, FONTS, FONT_SIZES, ASSETS } from '../config/theme';
import { useScrollReveal, slideUp, slideLeft, slideRight, staggerContainer } from './animations';

const stats = [
  { value: '11', label: 'Squad Members' },
  { value: '2024', label: 'Founded' },
  { value: '100%', label: 'Family Bond' },
  { value: '∞',   label: 'Passion' },
];

export default function About() {
  const { ref: sectionRef, inView } = useScrollReveal(0.15);

  return (
    <section id="about" ref={sectionRef} style={{
      background: COLORS.darkBg, padding: '8rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>

      <div style={{
        position: 'absolute', left: 0, top: '50%', width: '100%', height: '1px',
        background: `linear-gradient(90deg, transparent, ${COLORS.crimson}30, transparent)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.p className="section-label"
          variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: '1rem' }}>
          About Us
        </motion.p>

        <motion.h2 variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: FONTS.display, fontSize: FONT_SIZES.h1,
            color: COLORS.white, textAlign: 'center', textTransform: 'uppercase',
            letterSpacing: '0.08em', marginBottom: '5rem',
          }}>
          More Than a <span style={{ color: COLORS.gold }}>Cricket Team</span>
        </motion.h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div style={{
              width: '48px', height: '3px',
              background: `linear-gradient(90deg, ${COLORS.crimson}, ${COLORS.gold})`,
              marginBottom: '2rem',
            }} />
            <p style={{
              fontFamily: FONTS.body, fontSize: '1.15rem', color: COLORS.offWhite,
              lineHeight: 1.8, marginBottom: '1.5rem',
            }}>
              Marrow CC isn't built on talent alone — it's built on <strong style={{ color: COLORS.gold }}>blood</strong>.
              We're a family-bond cricket team from Wattala, Sri Lanka, where every player is
              more than a teammate. Every player is family.
            </p>
            <p style={{
              fontFamily: FONTS.body, fontSize: '1.05rem', color: COLORS.muted,
              lineHeight: 1.8,
            }}>
              Just as bone marrow is the core that gives life to every part of the body,
              the bond between our members is what gives life to this team. We play with
              pride, compete with heart, and stand together as one — on and off the field.
            </p>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-12px',
              border: `1px solid ${COLORS.crimson}30`,
              pointerEvents: 'none',
            }} />
            <img src={ASSETS.jersey} alt="Marrow CC Jersey"
              style={{
                width: '100%', objectFit: 'cover', borderRadius: '2px',
                filter: 'brightness(0.9) contrast(1.05)',
              }}
              onError={e => {
                e.target.parentElement.innerHTML = `\n                  <div style="background:${COLORS.cardBg};border:1px solid ${COLORS.borderDark};\n                    padding:4rem 2rem;text-align:center;font-family:${FONTS.display};\n                    font-size:0.8rem;letter-spacing:0.2em;color:${COLORS.subtle};\n                    text-transform:uppercase;">\n                    Jersey Preview<br/><span style="color:${COLORS.crimson}">Coming Soon</span>\n                  </div>`;
              }} />
            <div style={{
              position: 'absolute', bottom: '1rem', right: '1rem',
              background: `${COLORS.crimson}`, padding: '6px 14px',
              fontFamily: FONTS.display, fontSize: '0.7rem', letterSpacing: '0.15em',
              color: COLORS.white, textTransform: 'uppercase',
            }}>
              Est. 2026
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1px', marginTop: '5rem',
            border: `1px solid ${COLORS.borderDark}`,
            background: COLORS.borderDark,
          }}>
          {stats.map(({ value, label }) => (
            <motion.div key={label} variants={slideUp}
              style={{
                background: COLORS.cardBg, padding: '2.5rem 1.5rem',
                textAlign: 'center',
              }}
              whileHover={{ background: `${COLORS.crimson}15` }}>
              <div style={{
                fontFamily: FONTS.display, fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700, color: COLORS.gold, marginBottom: '0.4rem',
                letterSpacing: '0.04em',
              }}>{value}</div>
              <div style={{
                fontFamily: FONTS.accent, fontSize: '0.72rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: COLORS.muted,
              }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
