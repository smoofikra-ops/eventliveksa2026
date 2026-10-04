import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemePreset = 'EVENT_LIVE_ORIGINAL' | 'EVENT_LIVE_ND96';

/**
 * DEFAULT ACTIVE THEME: Pure Evergreen Event Live Theme
 */
export const DEFAULT_ACTIVE_THEME: ThemePreset = 'EVENT_LIVE_ORIGINAL';

interface ThemeContextType {
  theme: ThemePreset;
  currentTheme?: ThemePreset;
  isND96: boolean;
  setTheme: (theme: ThemePreset) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_ACTIVE_THEME,
  currentTheme: DEFAULT_ACTIVE_THEME,
  isND96: false,
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemePreset>(DEFAULT_ACTIVE_THEME);

  const setTheme = (newTheme: ThemePreset) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme('EVENT_LIVE_ORIGINAL');
  };

  const isND96 = false;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('theme-original');
      document.documentElement.classList.remove('theme-nd96');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme: theme, isND96, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
