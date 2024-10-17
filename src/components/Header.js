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
        zIndex: 200,
        borderBottom: "1px solid grey",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container size={"4"}>
        <Flex align={"center"} justify={"between"}>
          <RadixLink
            style={{ color: darkMode ? "white" : "black" }}
            size={"6"}
            asChild
          >
            {
              // can put a custom logo here instead
              <Link href={"/"}>Meshara</Link>
            }
          </RadixLink>
          <Flex gap={"5"} align={"center"}>
            <RadixLink asChild>
              <Link href="/about">About Us</Link>
            </RadixLink>
            <RadixLink asChild>
              <Link href="/investors">For Investors</Link>
            </RadixLink>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
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
