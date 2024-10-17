"use client";

import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import NewsUpdate from "@/components/NewsUpdate";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { opacity } from "@/constants/transition";

export default function Home() {
  return (
    <motion.div {...opacity}>
      <Flex
        align={"center"}
        justify={"center"}
        style={{ flex: 1 }}
        direction={"column"}
        maxWidth={"fit-content"}
        m={"auto"}
      >
        <Flex
          mt={"28dvh"}
          mb={"164px"}
          align="center"
          justify={"center"}
          direction={"column"}
          gap={"2"}
        >
          <Heading
            // style={{ fontSize: "96px", lineHeight: 1 }}
            size={"9"}
          >
            Meshara
          </Heading>
          <Text size={"6"} align={"center"} mb={"4"}>
            Financial inclusion by connection.
          </Text>
          <Button size={"4"} variant="surface" highContrast={true} as="a">
            About Us <ArrowRightIcon />
          </Button>
        </Flex>
        <Heading size={"7"} as="h2" mb={"4"}>
          Latest News
        </Heading>
        <Flex direction={"column"} gap={"4"} mb={"32px"}>
          <NewsUpdate
            title={"Meshara revealed at Silicon Alps EBSCON4PIONEERS 2024"}
            text={
              "We're ecstatic to announce our participation at the Silicon Alps EBSCON4PIONEERS 2024 event. We will be  showcasing our latest developments in the field of financial inclusion and mesh network technology."
            }
            date={"02.10.2024"}
            author="Adrian Davies"
            authorRole={"Founder"}
            avatar="https://placebear.com/200/200"
          />
          <NewsUpdate
            title={"Duis aute irure dolor in reprehenderit in voluptate"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            date={"21.09.2024"}
            author="Lily Rauch"
          />
        </Flex>
      </Flex>
    </motion.div>
  );
}
