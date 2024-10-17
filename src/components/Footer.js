import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import InternalLink from "./common/InternaLink";
import email from "@/constants/email";

export default function Footer() {
  return (
    <Box
      px={"4"}
      py={"36px"}
      width={"100%"}
      style={{
        zIndex: 100,
        borderTop: "1px solid gray",
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
            <InternalLink href={"/about"}>About Us</InternalLink>
            <InternalLink href={"/how-it-works"}>How It Works</InternalLink>
            <InternalLink href={"/investors"}>For Investors</InternalLink>
          </Flex>
          © 2024 Meshara. All rights reserved.
          <Flex direction={"column"} gap={"2"} as="h2">
            <Heading size={"4"}>Contact</Heading>
            <Text>{email}</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
