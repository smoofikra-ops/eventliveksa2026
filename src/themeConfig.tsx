import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemePreset = 'EVENT_LIVE_ORIGINAL' | 'EVENT_LIVE_ND96';

/**
 * CENTRAL THEME SWITCH
 * Change this single value to switch themes:
 * - 'EVENT_LIVE_ND96' : Saudi National Day 96 theme with "عزّنا بطبعنا" identity
 * - 'EVENT_LIVE_ORIGINAL' : Reverts completely to the original Event Live theme
 */
export const DEFAULT_ACTIVE_THEME: ThemePreset = 'EVENT_LIVE_ND96';

export interface CampaignConfig {
  id: string;
  name: string;
  slogan: string;
  sloganEn: string;
  headline: string;
  headlineEn: string;
  subheadline: string;
  subheadlineEn: string;
  yearNumber: string;
  badgeText: string;
  endDate: string;
}

export const ND96_CAMPAIGN: CampaignConfig = {
  id: 'ND96',
  name: 'اليوم الوطني السعودي 96',
  slogan: 'عزّنا بطبعنا',
  sloganEn: 'Our Pride is Our Nature',
  headline: 'نوثق عزّ الوطن',
  headlineEn: 'Documenting the Nation\'s Glory',
  subheadline: 'تغطية وإنتاج احترافي لفعاليات واحتفالات اليوم الوطني السعودي 96 في كافة مدن ومناطق المملكة',
  subheadlineEn: 'Professional production & live coverage for Saudi National Day 96 celebrations across the Kingdom',
  yearNumber: '96',
  badgeText: 'EVENT LIVE × NATIONAL DAY 96',
  endDate: '2026-09-25'
};

interface ThemeContextType {
  theme: ThemePreset;
  isND96: boolean;
  setTheme: (theme: ThemePreset) => void;
  toggleTheme: () => void;
  campaign: CampaignConfig;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_ACTIVE_THEME,
  isND96: DEFAULT_ACTIVE_THEME === 'EVENT_LIVE_ND96',
  setTheme: () => {},
  toggleTheme: () => {},
  campaign: ND96_CAMPAIGN,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemePreset>(() => {
    // Check localStorage or URL query for quick previewing
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlTheme = urlParams.get('theme') as ThemePreset;
      if (urlTheme === 'EVENT_LIVE_ORIGINAL' || urlTheme === 'EVENT_LIVE_ND96') {
        return urlTheme;
      }
      const saved = localStorage.getItem('eventlive_active_theme') as ThemePreset;
      if (saved === 'EVENT_LIVE_ORIGINAL' || saved === 'EVENT_LIVE_ND96') {
        return saved;
      }
    }
    return DEFAULT_ACTIVE_THEME;
  });

  const setTheme = (newTheme: ThemePreset) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('eventlive_active_theme', newTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'EVENT_LIVE_ND96' ? 'EVENT_LIVE_ORIGINAL' : 'EVENT_LIVE_ND96');
  };

  const isND96 = theme === 'EVENT_LIVE_ND96';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isND96) {
        document.documentElement.classList.add('theme-nd96');
        document.documentElement.classList.remove('theme-original');
      } else {
        document.documentElement.classList.add('theme-original');
        document.documentElement.classList.remove('theme-nd96');
      }
    }
  }, [isND96]);

  return (
    <ThemeContext.Provider value={{ theme, isND96, setTheme, toggleTheme, campaign: ND96_CAMPAIGN }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
