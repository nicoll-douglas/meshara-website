import "@radix-ui/themes/styles.css";
import "./styles.css";
import { Flex } from "@radix-ui/themes";
import ParticlesBg from "@/components/ParticlesBg";
import { Poppins } from "next/font/google";
import ThemeWrapper from "@/components/ThemeWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Meshara",
  description: "Financial inclusion by connection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeWrapper>
          <ParticlesBg />
          <Header />
          <Flex
            maxWidth={"768px"}
            px={"4"}
            mt="65px"
            py={"64px"}
            mx={"auto"}
            direction={"column"}
            align={"center"}
            justify={"center"}
            style={{ flex: 1 }}
            asChild
          >
            <main>{children}</main>
          </Flex>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
