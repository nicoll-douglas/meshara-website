"use client";

import { Heading } from "@radix-ui/themes";
import InternalLink from "./common/InternaLink";
import useDarkMode from "@/hooks/useDarkMode";

export default function Logo() {
  const { darkMode } = useDarkMode();

  return (
    // can change to custom logo
    <Heading asChild>
      <InternalLink href={"/"} style={{ color: darkMode ? "white" : "black" }}>
        Meshara
      </InternalLink>
    </Heading>
  );
}
