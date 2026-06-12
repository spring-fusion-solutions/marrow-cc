import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COLORS, FONTS, FONT_SIZES, ASSETS } from '../config/theme';
import { useScrollReveal, slideUp, staggerContainer } from './animations';

function PlayerCard({ player, index }) {
  const [hovered, setHovered] = useState(false);
  const initials = player.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <motion.div
      variants={slideUp}
      custom={index}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'default',
        border: `1px solid ${hovered ? COLORS.crimson : COLORS.borderDark}`,
        transition: 'border-color 0.3s',
        background: COLORS.cardBg,
      }}>

      <div style={{
        position: 'absolute', top: '-10px', right: '-5px',
        fontFamily: FONTS.display, fontSize: '6rem', fontWeight: 700,
        color: hovered ? `${COLORS.crimson}20` : `${COLORS.borderDark}80`,
        lineHeight: 1, pointerEvents: 'none', transition: 'color 0.3s',
        userSelect: 'none',
      }}>
        {player.number}
      </div>

      <div style={{
        width: '100%', paddingTop: '100%', position: 'relative',
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.cardBg} 100%)`,
        overflow: 'hidden',
      }}>
        {player.image ? (
          <img src={player.image} alt={player.name}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              filter: hovered ? 'brightness(1.05)' : 'brightness(0.85)',
              transition: 'filter 0.3s, transform 0.4s',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }} />
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '0.5rem',
          }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: hovered
                ? `linear-gradient(135deg, ${COLORS.crimson}, ${COLORS.crimsonDark})`
                : `linear-gradient(135deg, ${COLORS.borderDark}, ${COLORS.subtle})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: FONTS.display, fontSize: '1.6rem', color: COLORS.white,
              letterSpacing: '0.05em', transition: 'background 0.3s',
            }}>
              {initials}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '1rem' }}>
              {[60, 80, 70].map((w, i) => (
                <div key={i} style={{
                  height: '2px', width: `${w}px`,
                  background: hovered ? `${COLORS.crimson}40` : `${COLORS.borderDark}60`,
                  borderRadius: '1px', transition: 'background 0.3s',
                  alignSelf: 'center',
                }} />
              ))}
            </div>
          </div>
        )}

        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
            background: `linear-gradient(to top, ${COLORS.black}CC, transparent)`,
          }} />
      </div>

      <div style={{ padding: '1.25rem 1rem 1.5rem' }}>
        <div style={{
          fontFamily: FONTS.accent, fontSize: '0.65rem', letterSpacing: '0.2em',
          color: COLORS.crimson, textTransform: 'uppercase', marginBottom: '0.35rem',
        }}>
          #{player.number}
        </div>
        <h3 style={{
          fontFamily: FONTS.display, fontSize: '1rem', letterSpacing: '0.08em',
          textTransform: 'uppercase', color: COLORS.white, marginBottom: '0.25rem',
        }}>
          {player.name}
        </h3>
        <p style={{
          fontFamily: FONTS.body, fontSize: '0.85rem',
          color: hovered ? COLORS.gold : COLORS.muted,
          transition: 'color 0.25s',
        }}>
          {player.role}
        </p>
      </div>

      <motion.div animate={{ scaleX: hovered ? 1 : 0 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, ${COLORS.crimson}, ${COLORS.gold})`,
          transformOrigin: 'left',
          transition: 'transform 0.3s ease',
        }} />
    </motion.div>
  );
}

export default function Squad() {
  const { ref, inView } = useScrollReveal(0.1);

  return (
    <section id="squad" ref={ref} style={{
      background: COLORS.darkBg, padding: '8rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke={COLORS.gold} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal)" />
      </svg>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.p className="section-label"
          variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: '1rem' }}>
          The Lineup
        </motion.p>

        <motion.h2 variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: FONTS.display, fontSize: FONT_SIZES.h1,
            color: COLORS.white, textAlign: 'center', textTransform: 'uppercase',
            letterSpacing: '0.08em', marginBottom: '1rem',
          }}>
          Our <span style={{ color: COLORS.gold }}>Squad</span>
        </motion.h2>

        <motion.p variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: FONTS.body, color: COLORS.muted, textAlign: 'center',
            maxWidth: '500px', margin: '0 auto 4rem', fontSize: '1rem', lineHeight: 1.7,
          }}>
          Eleven players. One heartbeat. Meet the core of Marrow CC.
        </motion.p>

        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
          {ASSETS.squad.map((player, i) => (
            <PlayerCard key={player.id} player={player} index={i} />
          ))}
        </motion.div>

        <motion.p variants={slideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: FONTS.accent, fontSize: '0.75rem', letterSpacing: '0.15em',
            color: COLORS.subtle, textAlign: 'center', marginTop: '3rem',
            textTransform: 'uppercase',
          }}>
          Squad updated for the 2026season
        </motion.p>
      </div>
    </section>
  );
}
