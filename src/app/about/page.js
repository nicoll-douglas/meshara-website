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
            Meshara is pioneering affordable, secure, and scalable access to essential services for underserved communities. Using decentralized, off-grid mesh technology, Meshara connects individuals in remote and conflict-affected areas to vital services, empowering them with tools for inclusion, security, and resilience.
          </Text>
          <Text size={"4"} align={"center"}>
            Our suite of services spans emergency communication, financial transactions, and disaster warnings, among others. Our mission is to foster inclusion, reduce transaction costs, and elevate security for individuals and businesses.
          </Text>
          <Text size={"4"} align={"center"}>
            Why Meshara? Unlike traditional networks with high costs and scaling challenges, Meshara offers a flexible, fault-tolerant solution at a fraction of the cost. Nationwide deployments can be achieved for six-figure sums, creating a viable alternative to traditional multi-million-dollar infrastructure investments.
          </Text>
          <DividerHorizontalIcon></DividerHorizontalIcon>
          <ButtonLink mt="4" href={"/how-it-works"}>
            How It Works
          </ButtonLink>
        </TextSection>
      </PageTransition>
  );
}