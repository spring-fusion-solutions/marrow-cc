import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS, FONTS } from '../config/theme';

const ENABLE_TOURNAMENT_REGISTRATION = false;

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    if (ENABLE_TOURNAMENT_REGISTRATION) {
      setModalOpen(true);
    } else {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            style={{
              position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 900,
              background: COLORS.crimson, border: `1px solid ${COLORS.crimsonLight}`,
              color: COLORS.white, cursor: 'pointer',
              fontFamily: FONTS.display, fontSize: '0.7rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', padding: '14px 22px',
              boxShadow: `0 0 30px ${COLORS.crimson}60`,
            }}
            aria-label="Register for tournament">
            🏏 Register Now
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem',
            }}>
            <motion.div
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: COLORS.cardBg, border: `1px solid ${COLORS.crimson}40`,
                maxWidth: '480px', width: '100%', padding: '3rem',
              }}>
              <p style={{ fontFamily: FONTS.accent, fontSize: '0.7rem', letterSpacing: '0.2em', color: COLORS.gold, textTransform: 'uppercase', marginBottom: '1rem' }}>
                Tournament Registration
              </p>
              <h3 style={{ fontFamily: FONTS.display, fontSize: '1.5rem', letterSpacing: '0.08em', color: COLORS.white, textTransform: 'uppercase', marginBottom: '1rem' }}>
                Coming Soon
              </h3>
              <p style={{ fontFamily: FONTS.body, color: COLORS.muted, lineHeight: 1.7, marginBottom: '2rem' }}>
                Tournament registration is being set up. Contact us directly in the meantime.
              </p>
              <button onClick={() => setModalOpen(false)} style={{
                fontFamily: FONTS.display, fontSize: '0.75rem', letterSpacing: '0.18em',
                padding: '12px 28px', background: COLORS.crimson, color: COLORS.white,
                border: 'none', cursor: 'pointer', textTransform: 'uppercase',
              }}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
