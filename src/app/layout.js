import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import {
  Theme,
  Container,
  Box,
  Flex,
  Heading,
  Link as RadixLink,
} from "@radix-ui/themes";
import ParticlesBg from "@/components/ParticlesBg";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ParticlesBg />
        <Theme
          style={{ zIndex: 50, display: "flex", flexDirection: "column" }}
          hasBackground={false}
          accentColor="gray"
          appearance="light"
        >
          <Box
            p={"16px"}
            position={"fixed"}
            left={0}
            top={0}
            width={"100vw"}
            style={{ background: "white" }}
          >
            <Container size={"4"}>
              <Flex align={"center"} justify={"between"}>
                <Link href={"/"}>
                  <Heading size={"6"}>Meshara</Heading>
                </Link>
                <Flex gap={"16px"}>
                  <RadixLink href="/news">News</RadixLink>
                  <RadixLink href="/about">About</RadixLink>
                  <RadixLink href="/for-investors">For Investors</RadixLink>
                </Flex>
              </Flex>
            </Container>
          </Box>
          <Container
            size={"4"}
            px={"16px"}
            my={"96px"}
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
