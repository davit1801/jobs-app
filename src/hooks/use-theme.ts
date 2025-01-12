import { ThemeProviderContext } from '@/contexts/theme-context';
import { useContext } from 'react';

export const useTheme = () => {
  const themeContext = useContext(ThemeProviderContext);

  if (themeContext === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return themeContext;
};
