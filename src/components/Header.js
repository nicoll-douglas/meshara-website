import { Box, Container, Flex } from "@radix-ui/themes";
import InternalLink from "./common/InternaLink";
import ToggleThemeBtn from "./ToggleThemeBtn";
import Logo from "./Logo";

export default function Header() {
  return (
    <Box
      position={"fixed"}
      left={0}
      top={0}
      width={"100%"}
      style={{
        zIndex: 200,
        borderBottom: "1px solid gray",
        backdropFilter: "blur(10px)",
      }}
      asChild
    >
      <header>
        <Container size={"4"} p={"4"}>
          <Flex align={"center"} justify={"between"}>
            <Logo />
            <Flex>
              <Flex gap={"5"} align={"center"} asChild>
                <nav>
                  <InternalLink href="/about">About Us</InternalLink>
                  <InternalLink href={"/how-it-works"}>
                    How It Works
                  </InternalLink>
                  <InternalLink href="/investors">For Investors</InternalLink>
                </nav>
              </Flex>
              <ToggleThemeBtn ml="5" />
            </Flex>
          </Flex>
        </Container>
      </header>
    </Box>
  );
}
