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
  title, // title
  text, // main text
  date, // date
  link, // link to an article (optional)
  profile, // prop type is Profile, see /src/data/profiles.js
}) {
  return (
    <Card style={{ maxWidth: "640px" }} size={"2"} as="section">
      <Flex align={"start"} gap={"2"} justify={"between"} mb={"3"} asChild>
        <header>
          <Flex gap={"1"} align={"center"}>
            <Avatar
              aria-label={profile.name}
              src={profile.avatar}
              fallback={
                // gets first 2 initials of author name as a fallback
                profile.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")
              }
              mr={"2"}
            />
            <Flex direction={"column"} align={"start"}>
              <Text>{profile.name}</Text>
              {profile.role && (
                <Badge highContrast={true}>{profile.role}</Badge>
              )}
            </Flex>
          </Flex>
          <Text size={"3"}>{date}</Text>
        </header>
      </Flex>
      <Flex direction={"column"} gap={"2"} align={"start"}>
        <Heading size={"5"} as="h3">
          {title}
        </Heading>
        <Text>{text}</Text>
        {link && (
          <Link
            href={link}
            style={{ display: "flex", alignItems: "center", gap: 4 }}
            target="_blank"
          >
            Read more <ExternalLinkIcon aria-hidden="true" />
          </Link>
        )}
      </Flex>
    </Card>
  );
}
