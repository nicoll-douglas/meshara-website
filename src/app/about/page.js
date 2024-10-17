import { Flex, Heading, Text } from "@radix-ui/themes";
import ButtonLink from "@/components/common/ButtonLink";
import PageTransition from "@/components/common/PageTransition";
import TextSection from "@/components/common/TextSection";

export default function About() {
  return (
    <PageTransition>
      <TextSection heading={"About Us"}>
        <Text size={"4"} align={"center"}>
          Meshara provides secure, low-cost financial transactions for
          underserved communities using a decentralized, off-grid LoRa mesh
          network.
        </Text>
        <Text size={"4"} align={"center"}>
          Designed to operate without traditional infrastructure, Meshara
          connects people in remote and conflict-affected regions to financial
          services, promoting economic inclusion, reducing transaction costs,
          and enhancing financial security.
        </Text>
        <Text size={"4"} align={"center"}>
          Our mission is to empower individuals and businesses by bringing
          reliable, affordable financial access where it&apos;s needed most.
        </Text>
        <ButtonLink mt="4" href={"/how-it-works"}>
          How It Works
        </ButtonLink>
      </TextSection>
    </PageTransition>
  );
}
