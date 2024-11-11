import { Flex, Heading, Text, Link as RadixLink, Box } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  CalendarIcon,
} from "@radix-ui/react-icons";
import PageTransition from "@/components/common/PageTransition";
import email from "@/data/email";
import TextSection from "@/components/common/TextSection";

export const metadata = {
  title: "Meshara | Partnerships",
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

export default function Partnerships() {
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
              Partnerships
            </Heading>
            <TextSection>
              <Text size={"4"} align={"center"}>
                At Meshara, partnerships play a crucial role in our mission. We’re actively looking for collaborators who want to join us in delivering essential services to underserved regions.
              </Text>
              <Text size={"4"} align={"center"}>
                Are you interested in rolling out Meshara in your area, supporting our mission, or exploring partnership possibilities? Let’s connect and make an impact together. Whether you’re a local community organization, a technology provider, or a nonprofit working in remote areas, we welcome the opportunity to collaborate.
              </Text>
              <Text size={"4"} align={"center"}>
                Contact us at hello@meshara.net to discuss partnership opportunities and bring reliable connectivity where it’s needed most.
              </Text>
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
        </Flex>
      </PageTransition>
  );
}