"use client";

import { Flex, Heading, Text, Button } from "@radix-ui/themes";
import { opacity } from "@/constants/transition";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import ButtonLink from "@/components/common/ButtonLink";

export default function About() {
  return (
    <motion.div {...opacity}>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        maxWidth={"600px"}
        mx={"auto"}
        gap={"4"}
        style={{ flex: 1 }}
      >
        <Heading size={"9"} align={"center"} mb={"4"}>
          About Us
        </Heading>
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
        <ButtonLink href={"/investors"}>For Investors</ButtonLink>
      </Flex>
    </motion.div>
  );
}
