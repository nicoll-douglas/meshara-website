"use client";

import useDelayFallback from "@/hooks/useDelayFallback";
import { Spinner } from "@radix-ui/themes";

export default function Loading() {
  const show = useDelayFallback();

  return show && <Spinner size={"3"} m={"auto"} />;
}
