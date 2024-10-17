"use client";

import { motion } from "framer-motion";
import { Flex, Heading, Button } from "@radix-ui/themes";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { opacity } from "@/constants/transition";

export default function NotFound() {
  return (
    <motion.div {...opacity}>
      <Flex align={"center"} justify={"center"} direction={"column"} gap={"4"}>
        <Heading size={"9"} align={"center"}>
          404 | Not Found
        </Heading>
        <Button
          size={"4"}
          mt={"4"}
          variant="surface"
          highContrast={true}
          asChild
        >
          <Link href={"/"}>
            Back home <ArrowRightIcon />
          </Link>
        </Button>
      </Flex>
    </motion.div>
  );
}
