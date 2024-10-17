import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import InternalLink from "./common/InternaLink";
import email from "@/constants/email";

function ListSection({ heading, children }) {
  return (
    <Flex direction={"column"} gap={"2"} asChild>
      <section aria-labelledby="footer-links">
        <Heading size={"4"} as="h2" id={`footer-${heading}`}>
          {heading}
        </Heading>
        <Flex direction={"column"} gap={"2"} asChild>
          <ul style={{ listStyle: "none" }}>{children}</ul>
        </Flex>
      </section>
    </Flex>
  );
}

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
      asChild
    >
      <footer>
        <Container size={"4"}>
          <Flex
            justify={"between"}
            gap={"8"}
            id="footer-flexbox"
            style={{ flexWrap: "wrap" }}
          >
            <ListSection heading={"Links"}>
              <li>
                <InternalLink href={"/about"}>About Us</InternalLink>
              </li>
              <li>
                <InternalLink href={"/how-it-works"}>How It Works</InternalLink>
              </li>
              <li>
                <InternalLink href={"/investors"}>For Investors</InternalLink>
              </li>
            </ListSection>
            <section aria-label="Copyright">
              <Text>© 2024 Meshara. All rights reserved.</Text>
            </section>
            <ListSection heading={"Contact"}>
              <li>
                <Text>{email}</Text>
              </li>
            </ListSection>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}
