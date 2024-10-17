"use client";

import { createContext } from "react";
import { Theme } from "@radix-ui/themes";
import useLocalStorage from "@/hooks/useLocalStorage";

export const DarkModeContext = createContext();

export default function ThemeWrapper({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
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
