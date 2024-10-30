import { Flex, Heading, Text } from "@radix-ui/themes";
import NewsUpdate from "@/components/common/NewsUpdate";
import ButtonLink from "@/components/common/ButtonLink";
import PageTransition from "@/components/common/PageTransition";
import profiles from "@/data/profiles";

export const metadata = {
  title: "Meshara",
};

export default function Home() {
  const founder = profiles["0"];
  const cofounder = profiles["1"];
  const profile3 = profiles["2"];

  return (
    <PageTransition>
      <Flex
        align={"center"}
        justify={"center"}
        style={{ flex: 1 }}
        direction={"column"}
        maxWidth={"fit-content"}
        m={"auto"}
      >
        <Flex
          mt={"calc(50dvh - 234px)"}
          mb={"170px"}
          align="center"
          justify={"center"}
          direction={"column"}
          gap={"2"}
        >
          <Heading size={"9"}>Meshara</Heading>
          <Text size={"6"} align={"center"}>
            Financial inclusion by connection.
          </Text>
          <ButtonLink href={"/about"} mt="4">
            About Us
          </ButtonLink>
        </Flex>
        <Flex direction={"column"} align={"center"} justify={"center"} asChild>
          <section aria-label="Latest News">
            <Heading size={"7"} as="h2" mb={"4"}>
              Latest News
            </Heading>
            <Flex direction={"column"} gap={"4"} mb={"32px"} asChild>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <NewsUpdate
                    title={
                      "Meshara revealed at Silicon Alps EBSCON4PIONEERS 2024"
                    }
                    text={
                      "We're ecstatic to announce our participation at the Silicon Alps EBSCON4PIONEERS 2024 event. We will be showcasing our latest developments in the field of financial inclusion and mesh network technology."
                    }
                    date={"02.10.2024"}
                    // link="https://example.com/read-more"
                    profile={founder}
                  />
                </li>
              </ul>
            </Flex>
          </section>
        </Flex>
      </Flex>
    </PageTransition>
  );
}
