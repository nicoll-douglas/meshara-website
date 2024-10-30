import { Card, Flex, Avatar, Text, Badge } from "@radix-ui/themes";
import { Link } from "@radix-ui/themes";

// prop type is Profile, see /src/data/profiles.js
export default function ProfileCard({ profile }) {
  return (
    <Card
      style={{
        maxWidth: "300px",
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
      size={"2"}
    >
      <Flex
        align={"center"}
        direction={"column"}
        height={"100%"}
        style={{ flex: 1 }}
      >
        <Avatar
          my={"2"}
          size={"7"}
          aria-label={profile.name}
          src={profile.avatar}
          fallback={
            // gets first 2 initials of profile name as a fallback
            profile.name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")
          }
        />
        <Text size={"6"}>{profile.name}</Text>
        {profile.role && (
          <Badge mt={"1"} size={"2"} highContrast={true}>
            {profile.role}
          </Badge>
        )}
        <Text align={"center"} mt={"3"} mb={"4"}>
          {profile.bio}
        </Text>
        {profile.socials?.length > 0 && (
          <Flex mt={"auto"} mb={"2"} align={"center"} gap={"4"} asChild>
            <ul style={{ listStyle: "none" }} aria-label="Links">
              {profile.socials.map(({ link, Logo, name }, index) => (
                <li key={index}>
                  <Link
                    href={link}
                    target="_blank"
                    style={{ display: "block", height: "28px" }}
                    aria-label={name}
                  >
                    <Logo width="28px" height="28px" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}
