import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { COLORS, FONTS, NAV_ITEMS, SOCIAL, ASSETS } from '../config/theme';

const socialLinks = [
  { icon: FaFacebookF, href: SOCIAL.facebook,  label: 'Facebook'  },
  { icon: FaInstagram, href: SOCIAL.instagram,  label: 'Instagram' },
  { icon: FaTiktok,    href: SOCIAL.tiktok,     label: 'TikTok'    },
  { icon: FaWhatsapp,  href: SOCIAL.whatsapp,   label: 'WhatsApp'  },
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: COLORS.black,
      borderTop: `1px solid ${COLORS.borderDark}`,
      padding: '4rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Top row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem', marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src={ASSETS.logo} alt="Marrow CC" style={{ height: '40px', width: '40px', objectFit: 'contain' }}
                onError={e => e.target.style.display='none'} />
              <span style={{ fontFamily: FONTS.display, fontSize: '1.1rem', letterSpacing: '0.12em', color: COLORS.white }}>
                MARROW <span style={{ color: COLORS.gold }}>CC</span>
              </span>
            </div>
            <p style={{ fontFamily: FONTS.body, fontSize: '0.9rem', color: COLORS.muted, lineHeight: 1.7, maxWidth: '220px' }}>
              One Team. One Bond. One Core.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{
              fontFamily: FONTS.accent, fontSize: '0.7rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: COLORS.subtle, marginBottom: '1.25rem',
            }}>Navigation</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <button onClick={() => handleNav(item.href)} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: FONTS.body, fontSize: '0.95rem', color: COLORS.muted,
                    transition: 'color 0.2s', padding: 0,
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = COLORS.white}
                    onMouseLeave={e => e.currentTarget.style.color = COLORS.muted}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p style={{
              fontFamily: FONTS.accent, fontSize: '0.7rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: COLORS.subtle, marginBottom: '1.25rem',
            }}>Follow Us</p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  style={{
                    width: '40px', height: '40px',
                    border: `1px solid ${COLORS.borderDark}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: COLORS.muted, fontSize: '0.95rem', background: COLORS.cardBg,
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = COLORS.crimson;
                    e.currentTarget.style.color = COLORS.white;
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
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${COLORS.borderDark}, transparent)`,
          marginBottom: '1.75rem',
        }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          alignItems: 'center', justifyContent: 'space-between',
        }}>
          <p style={{ fontFamily: FONTS.body, fontSize: '0.8rem', color: COLORS.subtle }}>
            © {new Date().getFullYear()} Marrow CC. All rights reserved.
          </p>
          <p style={{
            fontFamily: FONTS.accent, fontSize: '0.7rem', letterSpacing: '0.15em',
            color: COLORS.subtle, textTransform: 'uppercase',
          }}>
            Wattala · Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
