"use client";

import {
  Box,
  Container,
  Flex,
  Link as RadixLink,
  Heading,
  IconButton,
} from "@radix-ui/themes";
import Link from "next/link";
import { useContext } from "react";
import { DarkModeContext } from "./ThemeWrapper";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <Box
      p={"16px"}
      position={"fixed"}
      left={0}
      top={0}
      width={"100vw"}
      style={{
        background: darkMode ? "black" : "white",
        zIndex: 200,
        borderBottom: `1px solid ${darkMode ? "white" : "black"}`,
      }}
    >
      <Container size={"4"}>
        <Flex align={"center"} justify={"between"}>
          <Link href={"/"}>
            {
              // can put a custom logo here instead
              <Heading size={"6"}>Meshara</Heading>
            }
          </Link>
          <Flex gap={"4"} align={"center"}>
            <RadixLink href="/news">News</RadixLink>
            <RadixLink href="/about">About</RadixLink>
            <RadixLink href="/for-investors">For Investors</RadixLink>
            <IconButton
              onClick={() => setDarkMode((v) => !v)}
              variant="surface"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </IconButton>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
