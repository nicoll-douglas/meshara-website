import { Text } from "@radix-ui/themes";
import ButtonLink from "@/components/common/ButtonLink";
import PageTransition from "@/components/common/PageTransition";
import TextSection from "@/components/common/TextSection";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: "Meshara | About Us",
};

export default function About() {
  return (
    <PageTransition>
      <TextSection heading={"About Us"}>
        <Text size={"4"} align={"center"}>
          Meshara provides secure, low-cost, and scalable access to essential services for
          underserved communities using decentralized, off-grid mesh technologies.
        </Text>
        <Text size={"4"} align={"center"}>
          Meshara connects people in remote and conflict-affected regions and provides them with a suite of essential services (eg. Emergency Communication, Financial Transactions, Disaster Warning,...), 
          promoting inclusion, reducing transaction costs, and enhancing security.
        </Text>
        <Text size={"4"} align={"center"}>
          Our mission is to empower individuals and businesses by bringing
          reliable, affordable financial access where it&apos;s needed most.
        </Text>
        <DividerHorizontalIcon></DividerHorizontalIcon>
        <Text size={"4"} align={"center"}>
          In comparison to traditional mesh networks, that often have issues with scaling, security, or pricing, Meshara is deployable nationwide, only costing 6-figure-sums (instead of 9 figures in traditional networking) and is secure as well as very fault tolerable.
        </Text>
        <ButtonLink mt="4" href={"/how-it-works"}>
          How It Works
        </ButtonLink>
      </TextSection>
    </PageTransition>
  );
}
