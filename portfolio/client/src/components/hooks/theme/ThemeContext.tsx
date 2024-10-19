import React, { createContext, useState, useEffect, ReactNode} from "react";

// define context value type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
};

const defaultThemeContext: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext =  createContext<ThemeContextType>(defaultThemeContext);

//  define the theme provider component props
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // set default theme and declare state
    const [theme, setTheme] = useState<string>(() => {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? savedTheme : "light";
    });

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
    
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    // document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};