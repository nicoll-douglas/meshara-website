import PageTransition from "@/components/common/PageTransition";
import { Flex, Grid, Heading } from "@radix-ui/themes";
import ProfileCard from "@/components/common/ProfileCard";
import profiles from "@/data/profiles";
import ButtonLink from "@/components/common/ButtonLink";

export const metadata = {
  title: "Meshara | Our Team",
};

export default function MeetTheTeam() {
  return (
    <PageTransition>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        width={"100%"}
      >
        <Heading size={"9"} align={"center"} mb="6" className="main-heading">
          Our Team
        </Heading>
        <Grid columns={"2"} gap={"4"} id="team-grid" asChild>
          <ul style={{ listStyle: "none" }}>
            <li>
              <ProfileCard profile={profiles["0"]} />
            </li>
            <li>
              <ProfileCard profile={profiles["1"]} />
            </li>
          </ul>
        </Grid>
        <ButtonLink href={"/investors"} mt="52px">
          Want to work with us?
        </ButtonLink>
      </Flex>
    </PageTransition>
  );
}
