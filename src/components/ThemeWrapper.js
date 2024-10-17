/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, createContext, useEffect, useMemo } from "react";
import { Theme } from "@radix-ui/themes";

export const DarkModeContext = createContext();

export default function ThemeWrapper({ children }) {
  const stateInitial = false;
  const [darkMode, setDarkMode] = useState(stateInitial);

  useEffect(() => {
    const trueInitial = localStorage.getItem("darkMode");
    if (trueInitial) {
      setDarkMode(JSON.parse(trueInitial));
    } else {
      setDarkMode(stateInitial);
      localStorage.setItem("darkMode", JSON.stringify(stateInitial));
    }
  }, []);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode: (value) => {
          setDarkMode(value);
          localStorage.setItem("darkMode", JSON.stringify(value));
        },
      }}
    >
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
