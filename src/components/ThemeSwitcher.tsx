import React from 'react';
import { useAppTheme } from '../themeConfig';
import { useLanguage } from '../LanguageContext';
import { Flag, Sparkles, RefreshCw } from 'lucide-react';

/**
 * Reversible Theme Switcher
 * Allows immediate preview and verification of:
 * 1. EVENT_LIVE_ND96 (Saudi National Day 96 Master Theme)
 * 2. EVENT_LIVE_ORIGINAL (Original Event Live Production Theme)
 */
export const ThemeSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, setTheme, isND96 } = useAppTheme();
  const { language } = useLanguage();

  return (
    <div className={`flex items-center gap-1.5 p-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md shadow-lg ${compact ? 'text-xs' : 'text-xs sm:text-sm'}`}>
      <button
        onClick={() => setTheme('EVENT_LIVE_ND96')}
        title="تفعيل هوية اليوم الوطني 96"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer whitespace-nowrap ${
          isND96
            ? 'bg-gradient-to-r from-[#006C35] to-[#028A45] text-white border border-[#D4AF37]/50 shadow-[0_0_12px_rgba(0,108,53,0.5)]'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
      >
        <span className="text-xs">🇸🇦</span>
        <span>{language === 'ar' ? 'اليوم الوطني 96' : 'ND96 Theme'}</span>
        {isND96 && <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />}
      </button>

      <button
        onClick={() => setTheme('EVENT_LIVE_ORIGINAL')}
        title="استعادة الهوية الأصلية لإيفنت لايف"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer whitespace-nowrap ${
          !isND96
            ? 'bg-amber-500 text-black border border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
      >
        <RefreshCw className="w-3 h-3" />
        <span>{language === 'ar' ? 'الهوية الأصلية' : 'Original'}</span>
      </button>
    </div>
  );
};
