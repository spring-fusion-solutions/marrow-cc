import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, ASSETS, COLORS, FONTS } from '../config/theme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 2rem',
          height: scrolled ? '64px' : '80px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled
            ? 'rgba(10,10,10,0.97)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${COLORS.borderDark}` : 'none',
          transition: 'all 0.35s ease',
        }}
      >
        <button onClick={() => handleNav('#hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={ASSETS.logo} alt="Marrow CC" style={{ height: '44px', width: '44px', objectFit: 'contain' }}
            onError={e => { e.target.style.display='none'; }} />
          <span style={{ fontFamily: FONTS.display, fontSize: '1.3rem', letterSpacing: '0.12em', color: COLORS.white }}>
            MARROW <span style={{ color: COLORS.gold }}>CC</span>
          </span>
        </button>

        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}
            className="desktop-nav">
          {NAV_ITEMS.map(item => (
            <li key={item.label}>
              <button
                onClick={() => handleNav(item.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: FONTS.display, fontSize: '0.78rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: COLORS.muted, transition: 'color 0.2s',
                  padding: '4px 0',
                }}
                onMouseEnter={e => e.currentTarget.style.color = COLORS.gold}
                onMouseLeave={e => e.currentTarget.style.color = COLORS.muted}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleNav('#contact')}
          className="desktop-nav"
          style={{
            fontFamily: FONTS.display, fontSize: '0.72rem', letterSpacing: '0.18em',
            padding: '10px 24px', background: 'transparent',
            border: `1px solid ${COLORS.crimson}`, color: COLORS.white, cursor: 'pointer',
            textTransform: 'uppercase', transition: 'all 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = COLORS.crimson; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
        >
          Join Us
        </motion.button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: '5px', padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '2px',
              background: menuOpen && i === 1 ? 'transparent' : COLORS.white,
              transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
              transition: 'all 0.25s',
            }} />
          ))}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 999,
              background: 'rgba(10,10,10,0.98)',
              borderBottom: `1px solid ${COLORS.borderDark}`,
              padding: '2rem',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
            }}
          >
            {NAV_ITEMS.map(item => (
              <button key={item.label} onClick={() => handleNav(item.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: FONTS.display, fontSize: '1.1rem', letterSpacing: '0.2em',
                  color: COLORS.offWhite, textAlign: 'left', textTransform: 'uppercase',
                }}>
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
