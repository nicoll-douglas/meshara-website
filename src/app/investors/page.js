"use client";

import Link from "next/link";
import { Flex, Heading, Text, Link as RadixLink } from "@radix-ui/themes";
import { opacity } from "@/constants/transition";
import { motion } from "framer-motion";
import {
  EnvelopeClosedIcon,
  CalendarIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

export default function Investors() {
  return (
    <motion.div {...opacity}>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        mt={"62px"}
        maxWidth={"600px"}
        mx={"auto"}
        gap={"4"}
        style={{ flex: 1 }}
      >
        <Heading size={"9"} align={"center"}>
          For Investors
        </Heading>
        <Heading size={"7"} mt={"8"} as="h2">
          Contact
        </Heading>
        <Flex direction={"column"} gap={"2"} align={"center"}>
          <Text
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            size={"5"}
          >
            <EnvelopeClosedIcon width={"20px"} height={"20px"} />
            hello@meshara.net
          </Text>
          <RadixLink
            size={"5"}
            target="_blank"
            href=" https://calendly.com/meshara-investor"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <CalendarIcon width={"20px"} height={"20px"} />
            Schedule a meeting
          </RadixLink>
        </Flex>
        <Heading size={"7"} mt={"8"} as="h2">
          Resources
        </Heading>
        <Flex direction={"column"} gap={"2"} align={"center"}>
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
        </Flex>
      </Flex>
    </motion.div>
  );
}
