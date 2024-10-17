import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Container } from "@radix-ui/themes";
import ParticlesBg from "@/components/ParticlesBg";
import { Poppins } from "next/font/google";
import ThemeWrapper from "@/components/ThemeWrapper";
import Header from "@/components/Header";

const kanit = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Meshara",
  description: "Financial inclusion by connection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <ThemeWrapper>
          <ParticlesBg />
          <Header />
          <Container
            size={"4"}
            px={"16px"}
            my={"96px"}
            top={0}
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            {children}
          </Container>
        </ThemeWrapper>
      </body>
    </html>
  );
}
