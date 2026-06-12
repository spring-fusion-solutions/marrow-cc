import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { COLORS, FONTS, FONT_SIZES, ASSETS, SOCIAL } from '../config/theme';

const socialLinks = [
  { icon: FaFacebookF,  href: SOCIAL.facebook,  label: 'Facebook'  },
  { icon: FaInstagram,  href: SOCIAL.instagram,  label: 'Instagram' },
  { icon: FaTiktok,     href: SOCIAL.tiktok,     label: 'TikTok'    },
  { icon: FaWhatsapp,   href: SOCIAL.whatsapp,   label: 'WhatsApp'  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: COLORS.black,
      padding: '6rem 2rem 4rem',
      textAlign: 'center',
    }}>

      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '700px',
        background: `radial-gradient(ellipse, ${COLORS.crimson}22 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '400px', height: '400px',
        background: `radial-gradient(ellipse, ${COLORS.gold}15 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 20 }, (_, i) => (
          <line key={i} x1={-100 + i * 120} y1="0" x2={-100 + i * 120 + 300} y2="100%" stroke={COLORS.gold} strokeWidth="1" />
        ))}
      </svg>

      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <img src={ASSETS.logo} alt="Marrow CC Logo"
          style={{ width: '160px', height: '160px', objectFit: 'contain', marginBottom: '2rem',
                   filter: 'drop-shadow(0 0 40px rgba(200,16,46,0.5))' }}
          onError={e => e.target.style.display='none'} />
      </motion.div>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="section-label" style={{ marginBottom: '1rem' }}>
        Est. 2026 · Wattala, Sri Lanka
      </motion.p>

      <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible"
        style={{
          fontFamily: FONTS.display, fontSize: FONT_SIZES.hero,
          fontWeight: 700, letterSpacing: '0.06em',
          lineHeight: 1.05, color: COLORS.white,
          marginBottom: '1rem', textTransform: 'uppercase',
        }}>
        <span style={{ display: 'block' }}>Marrow</span>
        <span style={{
          display: 'block',
          background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight}, ${COLORS.gold})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>CC</span>
      </motion.h1>

      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
        style={{
          maxWidth: '680px', margin: '0 auto 2.5rem',
          padding: '1.5rem 2rem',
          borderLeft: `3px solid ${COLORS.crimson}`,
          borderRight: `3px solid ${COLORS.crimson}`,
          background: `linear-gradient(90deg, transparent, ${COLORS.crimson}10, transparent)`,
        }}>
        <p style={{
          fontFamily: FONTS.body, fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          fontStyle: 'italic', fontWeight: 500, letterSpacing: '0.02em',
          color: COLORS.offWhite, lineHeight: 1.5,
        }}>
          "The core of a bone is marrow.<br />
          <span style={{ color: COLORS.gold }}>The core of this team is each other."</span>
        </p>
      </motion.div>

      <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
        style={{
          fontFamily: FONTS.display, fontSize: '0.75rem', letterSpacing: '0.35em',
          color: COLORS.muted, textTransform: 'uppercase', marginBottom: '3rem',
        }}>
        One Team · One Bond · One Core
      </motion.p>

      <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
        <motion.a href="#squad" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          style={{
            fontFamily: FONTS.display, fontSize: '0.78rem', letterSpacing: '0.18em',
            padding: '14px 36px', background: COLORS.crimson, color: COLORS.white,
            textTransform: 'uppercase', border: `1px solid ${COLORS.crimson}`,
            cursor: 'pointer', transition: 'all 0.25s',
            boxShadow: `0 0 30px ${COLORS.crimson}40`,
          }}
          onClick={e => { e.preventDefault(); document.querySelector('#squad')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Meet the Squad
        </motion.a>
        <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          style={{
            fontFamily: FONTS.display, fontSize: '0.78rem', letterSpacing: '0.18em',
            padding: '14px 36px', background: 'transparent', color: COLORS.white,
            textTransform: 'uppercase', border: `1px solid ${COLORS.gold}`,
            cursor: 'pointer', transition: 'all 0.25s',
          }}
          onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Join Us
        </motion.a>
      </motion.div>

      <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
        style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center' }}>
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '46px', height: '46px', borderRadius: '50%',
              border: `1px solid ${COLORS.borderDark}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: COLORS.muted, fontSize: '1.1rem',
              background: COLORS.cardBg, transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = COLORS.crimson;
              e.currentTarget.style.color = COLORS.white;
              e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.crimson}50`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = COLORS.borderDark;
              e.currentTarget.style.color = COLORS.muted;
              e.currentTarget.style.boxShadow = 'none';
            }}>
            <Icon />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
        <div style={{
          width: '24px', height: '38px', border: `2px solid ${COLORS.subtle}`,
          borderRadius: '12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          padding: '5px',
        }}>
          <div style={{ width: '4px', height: '8px', background: COLORS.gold, borderRadius: '2px' }} />
        </div>
      </motion.div>
    </section>
  );
}
