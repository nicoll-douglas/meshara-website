"use client";

import { Flex, Heading, Text, Button } from "@radix-ui/themes";
import { opacity } from "@/constants/transition";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function About() {
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
        <Button
          size={"4"}
          mt={"4"}
          variant="surface"
          highContrast={true}
          asChild
        >
          <Link href={"/investors"}>
            For Investors <ArrowRightIcon />
          </Link>
        </Button>
      </Flex>
    </motion.div>
  );
}
