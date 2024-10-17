"use client";

import { IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import useDarkMode from "@/hooks/useDarkMode";

export default function ToggleThemeBtn(props) {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <IconButton
      onClick={() => setDarkMode(!darkMode)}
      variant="surface"
      aria-label="Toggle Dark Mode"
      aria-pressed={darkMode}
      {...props}
    >
      {darkMode ? (
        <SunIcon aria-hidden="true" />
      ) : (
        <MoonIcon aria-hidden="true" />
      )}
    </IconButton>
  );
}
