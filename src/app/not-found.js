import { Flex, Heading } from "@radix-ui/themes";
import ButtonLink from "@/components/common/ButtonLink";
import PageTransition from "@/components/common/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <Flex align={"center"} justify={"center"} direction={"column"} gap={"4"}>
        <Heading size={"9"} align={"center"}>
          404 | Not Found
        </Heading>
        <ButtonLink href="/">Back Home</ButtonLink>
      </Flex>
    </PageTransition>
  );
}
