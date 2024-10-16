"use client";

import { useState, createContext, useEffect } from "react";
import { Theme } from "@radix-ui/themes";

export const DarkModeContext = createContext();

export default function ThemeWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if ("darkMode" in localStorage) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Theme
        style={{ display: "flex", flexDirection: "column" }}
        hasBackground={false}
        accentColor="gray"
        appearance={darkMode ? "dark" : "light"}
      >
        {children}
      </Theme>
    </DarkModeContext.Provider>
  );
}
