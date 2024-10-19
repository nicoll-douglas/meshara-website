import { Text } from "@radix-ui/themes";
import ButtonLink from "@/components/common/ButtonLink";
import PageTransition from "@/components/common/PageTransition";
import TextSection from "@/components/common/TextSection";

export default function HowItWorks() {
  return (
    <PageTransition>
      <TextSection heading={"How It Works"}>
        <Text size={"4"} align={"center"}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Nostra viverra
          purus sapien pretium ullamcorper felis accumsan. In lacus ante
          sagittis volutpat; diam pellentesque dictum habitasse maecenas.
        </Text>
        <Text size={"4"} align={"center"}>
          Massa ornare luctus scelerisque ridiculus suscipit phasellus purus
          dignissim sollicitudin. Senectus dui magnis vel sit faucibus id
          integer.
        </Text>
        <Text size={"4"} align={"center"}>
          Felis dolor tellus platea habitant duis non sapien efficitur. Lobortis
          vulputate nulla consequat posuere blandit cras suscipit.
        </Text>
        <ButtonLink mt="4" href={"/team"}>
          Our Team
        </ButtonLink>
      </TextSection>
    </PageTransition>
  );
}
