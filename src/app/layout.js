import "@radix-ui/themes/styles.css";
import "./styles.css";
import { Flex } from "@radix-ui/themes";
import ParticlesBg from "@/components/ParticlesBg";
import { Poppins } from "next/font/google";
import ThemeWrapper from "@/components/ThemeWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <Flex
            size={"4"}
            px={"4"}
            mt="65px"
            top={0}
            py={"64px"}
            left={0}
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
              flex: 1,
            }}
          >
            {children}
          </Flex>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
