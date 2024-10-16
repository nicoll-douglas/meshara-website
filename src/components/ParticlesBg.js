"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import useParticleConfig from "@/hooks/useParticleConfig";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);
  const config = useParticleConfig();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return <Particles id="tsparticles" options={config} />;
  }

  return <></>;
}
