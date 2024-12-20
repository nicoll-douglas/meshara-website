import { useContext, useMemo } from "react";
import { DarkModeContext } from "@/components/ThemeWrapper";

export default function useParticleConfig() {
  const { darkMode } = useContext(DarkModeContext);
  const white = "#ffffff";
  const black = "#000000";

  const config = useMemo(
    () => ({
      background: {
        color: {
          value: darkMode ? black : white,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false, // enable or disable particle hover events
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 80,
            duration: 0.5,
          },
        },
      },
      particles: {
        color: {
          value: darkMode ? white : black,
        },
        links: {
          color: darkMode ? white : black,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 0.6,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.25,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150, // number of particles
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [darkMode]
  );

  return config;
}
