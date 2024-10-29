import { Text } from "@radix-ui/themes";
import ButtonLink from "@/components/common/ButtonLink";
import PageTransition from "@/components/common/PageTransition";
import TextSection from "@/components/common/TextSection";

export const metadata = {
  title: "Meshara | How It Works",
};

export default function HowItWorks() {
  return (
    <PageTransition>
      <TextSection heading={"How It Works"}>
        <Text size={"4"} align={"center"}>
          This section is still under construction. Please check back later. 
          For a preview of what we are working on, please contact us directly at hello@meshara.net .
        </Text>
        <ButtonLink mt="4" href={"/team"}>
          Our Team
        </ButtonLink>
      </TextSection>
    </PageTransition>
  );
}
