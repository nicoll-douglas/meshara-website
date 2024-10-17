"use client";

import { Heading } from "@radix-ui/themes";
import InternalLink from "./common/InternaLink";
import useDarkMode from "@/hooks/useDarkMode";

export default function Logo() {
  const { darkMode } = useDarkMode();

  return (
    <Heading asChild>
      <InternalLink href={"/"} style={{ color: darkMode ? "white" : "black" }}>
        Meshara
      </InternalLink>
    </Heading>
  );
}
