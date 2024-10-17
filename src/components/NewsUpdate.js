import {
  Avatar,
  Badge,
  Card,
  Flex,
  Heading,
  Link,
  Text,
} from "@radix-ui/themes";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function NewsUpdate({
  title,
  author,
  authorRole,
  date,
  link = "https://example.com/read-more",
  text,
  avatar,
}) {
  return (
    <Card style={{ maxWidth: "620px" }} size={"2"} as="section">
      <Flex align={"start"} gap={"2"} justify={"between"} mb={"3"}>
        <Flex gap={"1"} align={"center"}>
          <Avatar
            src={
              // link to a local or external file, preferrably square
              avatar
            }
            fallback={
              // gets first 2 initials of author name as a fallback
              author
                ?.split(" ")
                .slice(0, 2)
                .map((n) => n[0])
                .join("")
            }
            mr={"2"}
          />
          <Flex direction={"column"} align={"start"}>
            <Text>{author}</Text>
            {
              // optional prop, e.g Founder, Sponsor etc
              authorRole && <Badge highContrast={true}>Founder</Badge>
            }
          </Flex>
        </Flex>
        <Text size={"3"}>{date}</Text>
      </Flex>
      <Flex direction={"column"} gap={"2"}>
        <Heading size={"5"} as="h3">
          {title}
        </Heading>
        <Text>
          {
            // main text
            text
          }
        </Text>
        {
          // optional prop, link to an article
          link && (
            <Link
              href={link}
              style={{ display: "flex", alignItems: "center", gap: 4 }}
              target="_blank"
            >
              Read more <ExternalLinkIcon />
            </Link>
          )
        }
      </Flex>
    </Card>
  );
}
