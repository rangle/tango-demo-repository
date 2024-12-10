import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';

type Brand = 'brand-1' | 'hot-brand';
type Mode = 'light' | 'dark';
type Breakpoint = 'desktop' | 'mobile';
type Density = 'default' | 'compact';

interface ThemeContextType {
  brand: Brand;
  mode: Mode;
  breakpoint: Breakpoint;
  density: Density;
  setBrand: (brand: Brand) => void;
  setMode: (mode: Mode) => void;
  setBreakpoint: (breakpoint: Breakpoint) => void;
  setDensity: (density: Density) => void;
  bodyClasses: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [brand, setBrand] = useState<Brand>('brand-1');
  const [mode, setMode] = useState<Mode>('light');
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');
  const [density, setDensity] = useState<Density>('default');

  const bodyClasses = [brand, mode, density, breakpoint].join(" ");

  useEffect(() => {
    document.body.className = bodyClasses;
  }, [bodyClasses]);

  const contextValue: ThemeContextType = {
    brand,
    mode,
    breakpoint,
    density,
    setBrand,
    setMode,
    setBreakpoint,
    setDensity,
    bodyClasses
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };