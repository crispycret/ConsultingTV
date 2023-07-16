import { useState } from "react";



const ThemeBackgroundColors = {
    light: '#f8f9fa',
    dark: '#212529',
};

const ThemeTextColors = {
    light: '#212529',
    dark: '#fff',
};

const ThemeColors = {
    background: ThemeBackgroundColors,
    text: ThemeTextColors,
};


const Theme = () => {
    const [isDark, setIsDark] = useState(false);
    const [activeTheme, setActiveTheme] = useState(isDark ? 'dark' : 'light');
  
    const activeBackgroundColor = () => {
        return activeTheme === 'dark' ? ThemeColors.background.dark : ThemeColors.background.light
    };

    const activeTextColor = () => {
        return activeTheme === 'dark' ? ThemeColors.text.dark : ThemeColors.text.light
    };

    const toggleTheme = () => {
      setIsDark(!isDark);
      setActiveTheme(isDark ? 'dark' : 'light');
    };
  
  
    return {
        isDark, 
        setIsDark,
        colors: ThemeColors,
        activeTheme,
        toggleTheme,
        activeBackgroundColor,
        activeTextColor,
    }

  }
  
  

export default Theme;