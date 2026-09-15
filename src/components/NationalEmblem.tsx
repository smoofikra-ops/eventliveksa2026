import React from 'react';

/**
 * Saudi National Emblem: Crossed Swords and Palm Tree
 */
export const SaudiEmblem = ({ className = "w-8 h-8", color = "#006C35" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="شعار المملكة العربية السعودية">
    {/* Palm Trunk */}
    <path d="M50 20 V65" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <path d="M48 30 Q50 25 52 30 V65 H48 Z" fill={color} />
    
    {/* Palm Fronds (Leaves) */}
    <path d="M50 20 C42 12 30 14 26 22 C34 22 44 26 50 28" fill={color} />
    <path d="M50 20 C58 12 70 14 74 22 C66 22 56 26 50 28" fill={color} />
    <path d="M50 25 C40 18 26 24 22 34 C32 32 42 34 50 36" fill={color} />
    <path d="M50 25 C60 18 74 24 78 34 C68 32 58 34 50 36" fill={color} />
    <path d="M50 32 C38 28 24 38 22 48 C30 44 42 42 50 42" fill={color} />
    <path d="M50 32 C62 28 76 38 78 48 C70 44 58 42 50 42" fill={color} />
    <path d="M50 40 C42 38 28 48 30 58 C36 52 44 49 50 48" fill={color} />
    <path d="M50 40 C58 38 72 48 70 58 C64 52 56 49 50 48" fill={color} />

    {/* Sword 1: Left to Right diagonal */}
    <path d="M22 84 C34 76 66 60 78 52" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M22 84 L26 80 L18 78 L20 86 Z" fill={color} />
    {/* Sword 1 Hilt & Pommel */}
    <circle cx="19" cy="85" r="2.5" fill={color} />
    <path d="M27 79 L23 87" stroke={color} strokeWidth="3" strokeLinecap="round" />

    {/* Sword 2: Right to Left diagonal */}
    <path d="M78 84 C66 76 34 60 22 52" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M78 84 L74 80 L82 78 L80 86 Z" fill={color} />
    {/* Sword 2 Hilt & Pommel */}
    <circle cx="81" cy="85" r="2.5" fill={color} />
    <path d="M73 79 L77 87" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/**
 * Official Saudi National Day 96 Badge — With campaign slogan "عزّنا بطبعنا"
 */
export const NationalDay96Badge = ({ className = "", lang = "ar" }: { className?: string, lang?: string }) => (
  <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#006C35]/90 via-[#004d25]/90 to-[#006C35]/90 border border-[#D4AF37]/50 shadow-[0_0_20px_rgba(0,108,53,0.4)] text-white backdrop-blur-md ${className}`}>
    <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center border border-[#D4AF37]/40 flex-shrink-0">
      <span className="text-[#D4AF37] font-black text-xs font-mono">96</span>
    </div>
    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide">
      <span className="text-[#FBBF24]">{lang === 'ar' ? 'اليوم الوطني 96' : 'National Day 96'}</span>
      <span className="text-white/40">|</span>
      <span className="text-emerald-200">{lang === 'ar' ? 'عزّنا بطبعنا' : 'Our Pride is Our Nature'}</span>
      <span className="text-sm">🇸🇦</span>
    </div>
  </div>
);

/**
 * Recurring 96 Visual Motif (Watermark / Atmospheric glow)
 */
export const Recurring96Motif = ({ 
  className = "", 
  opacity = 0.05,
  size = "text-[160px] md:text-[280px]"
}: { 
  className?: string, 
  opacity?: number,
  size?: string
}) => (
  <div 
    aria-hidden="true" 
    className={`select-none pointer-events-none font-mono font-black tracking-tighter leading-none text-emerald-400 flex items-center justify-center ${size} ${className}`}
    style={{ opacity }}
  >
    <span>9</span>
    <span className="text-[#D4AF37]/80">6</span>
  </div>
);

/**
 * Sadu and Geometric Saudi Pattern Divider Line
 */
export const SaduPatternDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-full flex items-center justify-center overflow-hidden py-4 ${className}`}>
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#006C35]/50 to-transparent" />
    <div className="relative z-10 flex items-center gap-2.5 px-4 bg-[#050505]/80 text-[#D4AF37]">
      <svg width="24" height="12" viewBox="0 0 24 12" fill="currentColor">
        <polygon points="12,0 24,12 0,12" />
      </svg>
      <div className="w-2 h-2 rounded-full bg-[#006C35]" />
      <span className="text-xs font-black tracking-widest text-[#D4AF37] font-mono">96</span>
      <div className="w-2 h-2 rounded-full bg-[#006C35]" />
      <svg width="24" height="12" viewBox="0 0 24 12" fill="currentColor">
        <polygon points="12,12 24,0 0,0" />
      </svg>
    </div>
  </div>
);
