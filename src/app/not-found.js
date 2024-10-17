"use client";

import { motion } from "framer-motion";
import { Flex, Heading } from "@radix-ui/themes";
import { opacity } from "@/constants/transition";

export default function NotFound() {
  return (
    <motion.div {...opacity}>
      <Flex align={"center"} justify={"center"}>
        <Heading size={"9"} align={"center"}>
          404 | Not Found
        </Heading>
      </Flex>
    </motion.div>
  );
}
