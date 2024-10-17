import Link from "next/link";
import { Flex, Heading, Text, Link as RadixLink } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  CalendarIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import PageTransition from "@/components/common/PageTransition";
import email from "@/constants/email";

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
        <Heading size={"9"} align={"center"}>
          For Investors
        </Heading>
        <ListSection heading={"Contact"}>
          <li>
            <Text
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              size={"5"}
            >
              <EnvelopeClosedIcon width={"20px"} height={"20px"} />
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
              <CalendarIcon width={"20px"} height={"20px"} />
              Schedule a meeting
            </RadixLink>
          </li>
        </ListSection>
        <ListSection heading={"Resources"}>
          <li>
            <RadixLink
              size={"5"}
              target="_blank"
              href="https://calendly.com/meshara-investor"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              asChild
            >
              <Link href={"/path/to/pitch-deck.pdf"}>
                <FileTextIcon width={"20px"} height={"20px"} />
                Our Pitch Deck
              </Link>
            </RadixLink>
          </li>
        </ListSection>
      </Flex>
    </PageTransition>
  );
}
