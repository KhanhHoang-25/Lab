/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";

const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
    backgroundColorHTML: "rgba(52, 54, 56, 0.063)",
  },
  light: {
    backgroundColor: " rgba(204, 205, 206, 0.868)",
    color: "black",
    backgroundColorHTML: "rgb(255, 255, 255)",
  },
};
const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false); // Default theme is light
  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);
  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };
  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeProvider, ThemeContext };
