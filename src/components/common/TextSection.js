import { Flex, Heading } from "@radix-ui/themes";

export default function TextSection({ heading, children }) {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={"4"}
      style={{ flex: 1 }}
      maxWidth={"640px"}
    >
      <Heading size={"9"} align={"center"} mb={"2"} className="main-heading">
        {heading}
      </Heading>
      <Flex direction={"column"} align={"center"} justify={"center"} gap={"5"}>
        {children}
      </Flex>
    </Flex>
  );
}
