import { FC, createContext, useState } from 'react';
import { PAGE_THEME } from '../config/constants';

export type ThemePropsType = {
    currentTheme: string;
    setCurrentTheme: (currentTheme: string) => void;
}

const contextDefaultValues: ThemePropsType = {
    currentTheme: PAGE_THEME.LIGHT,
    setCurrentTheme: () => {}
};

export const ThemeContext = createContext<ThemePropsType>(contextDefaultValues);

const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<string>(contextDefaultValues.currentTheme);

  return (
    <ThemeContext.Provider 
        value={{
            currentTheme,
            setCurrentTheme
        }}
    >
        {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
