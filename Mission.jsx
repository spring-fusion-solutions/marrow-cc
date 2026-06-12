import React from 'react';
import { motion } from 'framer-motion';
import { COLORS, FONTS, FONT_SIZES } from '../config/theme';
import { useScrollReveal, slideUp, staggerContainer } from './animations';

const pillars = [
  {
    number: '01',
    title: 'Our Mission',
    body: 'To compete at every level with unity, discipline, and heart — representing our families, our community, and the spirit of cricket that bonds us together beyond the boundary.',
    accent: COLORS.crimson,
    icon: '⚡',
  },
  {
    number: '02',
    title: 'Our Vision',
    body: 'To build a legacy where Marrow CC is recognised not just for victories on the pitch, but for the brotherhood it creates — inspiring the next generation to play with purpose.',
    accent: COLORS.gold,
    icon: '🏆',
  },
  {
    number: '03',
    title: 'Our Values',
    body: 'Family first. Honour the game. Never break the bond. These are not just words — they are the foundation every Marrow CC player carries onto the field.',
    accent: COLORS.crimson,
    icon: '🫀',
  },
];

export default function Mission() {
  const { ref, inView } = useScrollReveal(0.15);

  return (
    <section id="mission" ref={ref} style={{
      background: COLORS.black, padding: '8rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top edge accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: `linear-gradient(90deg, transparent, ${COLORS.crimson}, ${COLORS.gold}, ${COLORS.crimson}, transparent)`,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.p className="section-label"
          variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Purpose & Direction
        </motion.p>

        <motion.h2 variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: FONTS.display, fontSize: FONT_SIZES.h1,
            color: COLORS.white, textAlign: 'center', textTransform: 'uppercase',
            letterSpacing: '0.08em', marginBottom: '1rem',
          }}>
          Mission & <span style={{ color: COLORS.gold }}>Vision</span>
        </motion.h2>

        <motion.p variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: FONTS.body, color: COLORS.muted, textAlign: 'center',
            maxWidth: '560px', margin: '0 auto 5rem', fontSize: '1.05rem', lineHeight: 1.7,
          }}>
          Built on bone-deep bonds. Every match we play is a statement — that family wins.
        </motion.p>

        {/* Pillars */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
          {pillars.map(({ number, title, body, accent, icon }) => (
            <motion.div key={title} variants={slideUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{
                background: COLORS.cardBg,
                border: `1px solid ${COLORS.borderDark}`,
                padding: '2.5rem',
                position: 'relative', overflow: 'hidden',
                cursor: 'default',
              }}>
              {/* Corner accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '48px', height: '3px', background: accent,
              }} />

              <div style={{
                fontFamily: FONTS.accent, fontSize: '0.7rem', letterSpacing: '0.25em',
                color: accent, textTransform: 'uppercase', marginBottom: '1.5rem',
              }}>
                {number}
              </div>

              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>

              <h3 style={{
                fontFamily: FONTS.display, fontSize: '1.3rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: COLORS.white, marginBottom: '1rem',
              }}>
                {title}
              </h3>

              <p style={{
                fontFamily: FONTS.body, fontSize: '1rem', color: COLORS.muted,
                lineHeight: 1.75,
              }}>
                {body}
              </p>

              {/* Background number */}
              <div style={{
                position: 'absolute', bottom: '-20px', right: '-10px',
                fontFamily: FONTS.display, fontSize: '8rem', fontWeight: 700,
                color: `${accent}08`, lineHeight: 1, pointerEvents: 'none',
                userSelect: 'none',
              }}>
                {number}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider quote */}
        <motion.div variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            marginTop: '5rem', padding: '3rem 2rem',
            borderTop: `1px solid ${COLORS.borderDark}`,
            borderBottom: `1px solid ${COLORS.borderDark}`,
            textAlign: 'center',
          }}>
          <p style={{
            fontFamily: FONTS.display, fontSize: 'clamp(1.1rem, 3vw, 1.7rem)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: COLORS.white,
          }}>
            "Play hard. <span style={{ color: COLORS.crimson }}>Stay loyal.</span>{' '}
            <span style={{ color: COLORS.gold }}>Win together.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
