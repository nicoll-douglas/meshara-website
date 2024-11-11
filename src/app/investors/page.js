// import Link from "next/link";
import { Flex, Heading, Text, Link as RadixLink, Box } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  CalendarIcon,
  // FileTextIcon,
} from "@radix-ui/react-icons";
import PageTransition from "@/components/common/PageTransition";
import email from "@/data/email";
import TextSection from "@/components/common/TextSection";

export const metadata = {
  title: "Meshara | For Investors",
};

function ListSection({ heading, children }) {
  return (
    <Flex direction={"column"} align={"center"} justify={"center"} asChild>
      <section aria-labelledby={heading}>
        <Heading id={heading} size={"7"} as="h2" mb={"3"}>
          {heading}
        </Heading>
        <Flex
          direction={"column"}
          gap={"2"}
          align={"center"}
          justify={"center"}
          asChild
        >
          <ul style={{ listStyle: "none" }}>{children}</ul>
        </Flex>
      </section>
    </Flex>
  );
}

export default function Investors() {
  return (
    <PageTransition>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        gap={"9"}
        style={{ flex: 1 }}
      >
        <Box>
          <Heading size={"9"} align={"center"} className="main-heading">
            For Investors
          </Heading>
          <TextSection>
            <Text size={"4"} align={"center"}>
              At Meshara, we’re in the pre-seed stage and seeking visionary partners who share our commitment to connecting underserved regions through secure, low-cost access to essential services. Your investment will help us grow a sustainable, decentralized network that meets critical needs in real time, from disaster response to everyday financial transactions.
            </Text>
            <Text size={"4"} align={"center"}>
              By investing in Meshara, you’re joining a pioneering journey that addresses real-world problems with tangible impacts. We welcome conversations with investors interested in shaping the future of inclusive connectivity.
              <b> Contact us at <RadixLink href="mailto:hello@meshara.net">{email}</RadixLink> or schedule a call to
                learn more about opportunities to support our mission. </b> </Text>
          </TextSection>
        </Box>
        <ListSection heading={"Contact"}>
          <li>
            <Text
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              size={"5"}
            >
              <EnvelopeClosedIcon
                width={"20px"}
                height={"20px"}
                aria-hidden="true"
              />
              {email}
            </Text>
          </li>
          <li>
            <RadixLink
              size={"5"}
              target="_blank"
              href=" https://calendly.com/meshara-investor"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <CalendarIcon width={"20px"} height={"20px"} aria-hidden="true" />
              Schedule a meeting
            </RadixLink>
          </li>
        </ListSection>
        {/* <ListSection heading={"Resources"}>
          <li>
            <RadixLink
              size={"5"}
              target="_blank"
              href="/path/to/pitch-deck.pdf"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              asChild
            >
              <Link href={"/path/to/pitch-deck.pdf"}>
                <FileTextIcon
                  width={"20px"}
                  height={"20px"}
                  aria-hidden="true"
                />
                Our Pitch Deck
              </Link>
            </RadixLink>
          </li>
        </ListSection> */}
      </Flex>
    </PageTransition>
  );
}
