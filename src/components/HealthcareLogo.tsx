import React from 'react';

/**
 * HEALTHCARE INSPIRON — Canonical Brand Component
 *
 * ══════════════════════════════════════════════════════════════
 * SOURCE OF TRUTH HIERARCHY (reconciled 2026-04-14):
 *   1. MASTER AUTHORITY v15.html          ← Highest version
 *   2. SUPREME MASTER SYSTEM v12.html     ← 15-variant matrix
 *   3. Grand Final Master System_LOCKED   ← Wordmark method
 * ══════════════════════════════════════════════════════════════
 *
 * DOCTRINE (from v15 §4 + LOCKED §1):
 *   1X DOCTRINE   : 1X = 12px (Amber Dot Diameter)
 *   LAW OF EQUALITY: HEALTHCARE (10 chars) and INSPIRON (8 chars)
 *                   occupy identical widths via justify-content:space-between
 *                   with per-character <span> — NOT letterSpacing.
 *   GAP DOCTRINE  : gap = 0.45 × 1X = 5.4px between wordmark rows
 *   GOLDEN RATIO  : Amber divider = wordmark_width × 0.618
 *
 * PALETTE A (LOCKED):
 *   Screen spine: #2DD4BF  Screen dot: #F59E0B
 *   Print  spine: #0D9488  Print  dot: #D97706
 *   Parent spine: #00D2FF  Parent dot: #FFD700  (REF ONLY)
 *
 * FONT: 'Neo Sans Pro' via https://inspiron.tech/fonts/ (CDN authority)
 */

// ─── Sentry Icon ─────────────────────────────────────────────────────────────
// LOCKED SVG paths — do not modify geometry (from LOCKED.html line 186-187)
const PATH_S1 = "M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8 9.1 16.9 10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6 5.5 3.6 11.4 5.4 17.5 5.4 12.3 0 25-7.6 32.9-20 5.5-8.1 23.6-37 45-70.6 31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0 18.2 5.1 23.2 13.1 4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z";
const PATH_S2 = "M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z";

// ─── Icon Component ───────────────────────────────────────────────────────────
export const HealthcareIcon: React.FC<{
  size?: number;
  theme?: 'dark' | 'light' | 'print' | 'parent';
}> = ({ size = 40, theme = 'dark' }) => {
  const spine = theme === 'print' ? '#0D9488' : theme === 'parent' ? '#00D2FF' : '#2DD4BF';
  const dot   = theme === 'print' ? '#D97706' : theme === 'parent' ? '#FFD700' : '#F59E0B';
  return (
    <svg
      width={size * 1.02}
      height={size}
      viewBox="0 0 358.846 350.3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="HEALTHCARE INSPIRON icon"
    >
      <path d={PATH_S1} fill={spine} />
      <path d={PATH_S2} fill={spine} />
      <circle cx="321.346" cy="37.5" r="37.5" fill={dot} />
    </svg>
  );
};

// ─── App Icon Tile (V3 — PWA / Favicon) ─────────────────────────────────────
// rx=24px per v15 §1 "Tile Authority" — NOT 28%
export const HealthcareIconTile: React.FC<{
  size?: number;   // tile outer size in px
  theme?: 'dark' | 'print';
}> = ({ size = 100, theme = 'dark' }) => {
  const tileBg = theme === 'print' ? '#FFFFFF' : '#0A1F1D';
  const iconSz = Math.round(size * 0.64);
  return (
    <div style={{
      width: size, height: size,
      borderRadius: '24px',          // v15 rx:24 — locked
      background: tileBg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <HealthcareIcon size={iconSz} theme={theme} />
    </div>
  );
};

// ─── Wordmark Engine ──────────────────────────────────────────────────────────
// Law of Equality: both rows use justify-content:space-between so
// HEALTHCARE (10 chars) and INSPIRON (8 chars) occupy exactly the same width.
// Gap = 0.45 × 1X = 0.45 × 12px = 5.4px (v15 §2 Symmetry Engine)
interface WordmarkProps {
  width: number;        // px — total wordmark container width
  descSize: number;     // px — HEALTHCARE font-size
  brandSize: number;    // px — INSPIRON font-size
  descColor?: string;
  brandColor?: string;
}

const Wordmark: React.FC<WordmarkProps> = ({
  width,
  descSize,
  brandSize,
  descColor = '#8B949E',
  brandColor = '#E6EDF3',
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      textTransform: 'uppercase',
      lineHeight: 1,
      width: `${width}px`,
      gap: '5.4px',                   // 0.45 × 1X — v15 Symmetry Engine
      fontFamily: '"Neo Sans Pro", sans-serif',
    }}
  >
    {/* HEALTHCARE — Law of Equality row */}
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: `${descSize}px`, fontWeight: 300, color: descColor }}>
      {'HEALTHCARE'.split('').map((c, i) => <span key={i}>{c}</span>)}
    </div>
    {/* INSPIRON — Law of Equality row */}
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: `${brandSize}px`, fontWeight: 700, color: brandColor }}>
      {'INSPIRON'.split('').map((c, i) => <span key={i}>{c}</span>)}
    </div>
  </div>
);

// ─── Full Logo Lockup ─────────────────────────────────────────────────────────
interface HealthcareLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon' | 'tile';
  theme?: 'dark' | 'light' | 'print' | 'parent';
  size?: number;       // icon height in px — wordmark scales proportionally
  className?: string;
}

export const HealthcareLogo: React.FC<HealthcareLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  size = 40,
  className = '',
}) => {
  const isPrint    = theme === 'print';
  const isParent   = theme === 'parent';
  const tealColor  = isPrint ? '#0D9488' : isParent ? '#00D2FF' : '#2DD4BF';
  const amberColor = isPrint ? '#D97706' : isParent ? '#FFD700' : '#F59E0B';
  const descColor  = isPrint ? '#555555' : '#8B949E';
  const brandColor = isPrint ? '#0D9488' : isParent ? '#00D2FF' : '#E6EDF3';

  // ── Tile (V3 PWA / App Icon) ──────────────────────────────────────────────
  if (variant === 'tile') {
    return (
      <div className={className}>
        <HealthcareIconTile size={size} theme={isPrint ? 'print' : 'dark'} />
      </div>
    );
  }

  // ── Horizontal (Navbar/Header) ────────────────────────────────────────────
  // Source: LOCKED.html line 237-241 + v12 variant data id:1,4,7,10,11
  // Mapping:
  //   icon≤36 → compact rail:   w=110, d=7.5, b=17  (sidebar collapsed — v12 id:9)
  //   icon≤54 → navbar primary: w=120, d=7,   b=17  (LOCKED line 239 compact)
  //   icon≤72 → badge/partner:  w=140, d=8.5, b=20  (v15 id:4 ABC co-brand)
  //   icon>72 → standard:       w=220, d=14,  b=36  (LOCKED line 240 standard)
  if (variant === 'horizontal') {
    const wm = size <= 36
      ? { w: 110, d: 7.5, b: 17 }   // V9 compact rail (LOCKED line 241 sidebar)
      : size <= 54
      ? { w: 120, d: 7,   b: 17 }   // LOCKED line 239 compact — FIXED (was w180/d11/b24)
      : size <= 72
      ? { w: 140, d: 8.5, b: 20 }   // v15/v12 id:4 ABC co-brand / badge tier
      : { w: 220, d: 14,  b: 36 };  // LOCKED line 240 standard
    return (
      <div className={`flex items-center ${className}`} style={{ gap: '12px', display: 'flex', alignItems: 'center' }}>
        <HealthcareIcon size={size} theme={theme} />
        <Wordmark width={wm.w} descSize={wm.d} brandSize={wm.b} descColor={descColor} brandColor={brandColor} />
      </div>
    );
  }

  // ── Stacked (Splash/Login/Sidebar/Monument) ───────────────────────────────
  // Source: LOCKED.html line 238-241 (4 stacked sizes) + v12 additions
  // Sizes from LOCKED + v12/v15:
  //   icon≤32  → mobile:       w=80,  d=6,   b=14  (LOCKED line 242 mobile)
  //   icon≤56  → rail:         w=110, d=7.5,  b=17  (LOCKED line 241 sidebar)
  //   icon≤90  → badge tile:   w=150, d=9,   b=21  (v12 id:6 badge pill shell) [INTERPOLATED]
  //   icon≤130 → monument:     w=240, d=14,  b=36  (v12 id:5 monument — LOCKED line 240 match)
  //   icon≤160 → login hero:   w=280, d=16,  b=40  (v12 id:14 login hero) [v12 LOCKED]
  //   icon≤200 → architectural:w=320, d=18,  b=44  (v15 id:2 / v12 id:2 architectural hero)
  //   icon>200 → splash strip: w=360, d=20,  b=50  (v15 id:11 marketing strip)
  if (variant === 'stacked') {
    const wm = size <= 32
      ? { w: 80,  d: 6,   b: 14 }   // LOCKED mobile (line 242)
      : size <= 56
      ? { w: 110, d: 7.5, b: 17 }   // LOCKED sidebar rail (line 241)
      : size <= 90
      ? { w: 150, d: 9,   b: 21 }   // v12 id:6 badge pill shell [v12 LOCKED]
      : size <= 130
      ? { w: 240, d: 14,  b: 36 }   // v12 id:5 monument portrait
      : size <= 160
      ? { w: 280, d: 16,  b: 40 }   // v12 id:14 login hero card [v12 LOCKED]
      : size <= 200
      ? { w: 320, d: 18,  b: 44 }   // v15 id:2 architectural hero [v15 LOCKED]
      : { w: 360, d: 20,  b: 50 };  // v15 id:11 marketing strip splash
    return (
      <div className={`flex flex-col items-center ${className}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <HealthcareIcon size={size} theme={theme} />
        <Wordmark width={wm.w} descSize={wm.d} brandSize={wm.b} descColor={descColor} brandColor={brandColor} />
        {/* Amber divider — Golden Ratio of wordmark width (LOCKED §1 doctrine) */}
        <div style={{
          width: `${Math.round(wm.w * 0.618)}px`,
          height: '1px',
          background: amberColor,
          opacity: 0.45,
          marginTop: '-8px',
        }} />
      </div>
    );
  }

  // ── Icon Only ─────────────────────────────────────────────────────────────
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <HealthcareIcon size={size} theme={theme} />
    </div>
  );
};

export default HealthcareLogo;

// ── Named convenience exports ─────────────────────────────────────────────────
export const HealthcareLogoHorizontal: React.FC<{ size?: number; theme?: 'dark' | 'light' | 'print' | 'parent' }> = ({ size = 36, theme = 'dark' }) => (
  <HealthcareLogo variant="horizontal" size={size} theme={theme} />
);
export const HealthcareLogoStacked: React.FC<{ size?: number; theme?: 'dark' | 'light' | 'print' | 'parent' }> = ({ size = 72, theme = 'dark' }) => (
  <HealthcareLogo variant="stacked" size={size} theme={theme} />
);
export const HealthcareLogoTile: React.FC<{ size?: number; theme?: 'dark' | 'print' }> = ({ size = 100, theme = 'dark' }) => (
  <HealthcareLogo variant="tile" size={size} theme={theme} />
);

// ── Seal / Digital Stamp (v12 id:10, v15 id:8) ───────────────────────────────
// w=96 d=7.5 b=16 — column stacked, no icon (pure wordmark seal)
export const HealthcareSeal: React.FC<{ theme?: 'dark' | 'print' }> = ({ theme = 'dark' }) => {
  const brandColor = theme === 'print' ? '#0D9488' : '#2DD4BF';
  const descColor  = theme === 'print' ? '#555'    : '#8B949E';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5.4px' }}>
      <Wordmark width={96} descSize={7.5} brandSize={16} descColor={descColor} brandColor={brandColor} />
    </div>
  );
};

// ── Watermark / Ghost (v15 id:12) ─────────────────────────────────────────────
// w=200 opacity=10% — dashboard background emboss
export const HealthcareWatermark: React.FC = () => (
  <div style={{ opacity: 0.1, pointerEvents: 'none', userSelect: 'none' }}>
    <HealthcareLogo variant="stacked" size={100} theme="dark" />
  </div>
);
