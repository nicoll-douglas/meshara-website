"use client";

import { motion } from "framer-motion";
import * as tr from "@/constants/transition";

export default function PageTransition({ variant = "opacity", children }) {
  return <motion.div {...tr[variant]}>{children}</motion.div>;
}
