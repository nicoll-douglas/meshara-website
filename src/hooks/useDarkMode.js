import { DarkModeContext } from "@/components/ThemeWrapper";
import { useContext } from "react";

export default function useDarkMode() {
  return useContext(DarkModeContext);
}
