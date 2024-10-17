import {
  Box,
  Container,
  Flex,
  Heading,
  Link as RadixLink,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      px={"4"}
      py={"36px"}
      width={"100vw"}
      position={"relative"}
      style={{
        zIndex: 100,
        borderTop: "1px solid grey",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container size={"4"}>
        <Flex
          justify={"between"}
          gap={"8"}
          id="footer-flexbox"
          style={{ flexWrap: "wrap" }}
        >
          <Flex direction={"column"} gap={"2"}>
            <Heading size={"4"} as="h2">
              Links
            </Heading>
            <RadixLink asChild>
              <Link href="/about">About Us</Link>
            </RadixLink>
            <RadixLink asChild>
              <Link href="/investors">For Investors</Link>
            </RadixLink>
          </Flex>
          © 2024 Meshara. All rights reserved.
          <Flex direction={"column"} gap={"2"} as="h2">
            <Heading size={"4"}>Contact</Heading>
            <Text>hello@meshara.net</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
