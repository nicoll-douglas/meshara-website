import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

class Profile {
  constructor(name, role, bio, avatar, socials) {
    this.name = name; // String
    this.role = role; // String
    this.bio = bio; // String
    this.avatar = avatar; // String (link)
    this.socials = socials; // array of Social
  }
}

class Social {
  constructor(link, logo, name) {
    this.link = link; // String (link)
    this.Logo = logo; // icon component
    this.name = name; // String (accessible name)
  }
}

const profiles = {
  0: new Profile(
    "Adrian Davies",
    "Founder",
    "Risus elit eros commodo; curabitur vivamus inceptos duis risus. Etiam mi proin litora gravida sed in tortor sapien est. Scelerisque pulvinar nascetur per amet sodales egestas.",
    null,
    [new Social("https://www.linkedin.com", LinkedInLogoIcon, "LinkedIn")]
  ),
  1: new Profile(
    "John Doe",
    null,
    "Magna efficitur eget ultrices; cursus justo nunc taciti. Nunc suspendisse feugiat vehicula lectus parturient dictum enim integer. Efficitur maximus lorem nisi justo maecenas non fames.",
    "https://placebear.com/200/200",
    [
      new Social("https://instagram.com", InstagramLogoIcon, "Instagram"),
      new Social("https://www.linkedin.com", LinkedInLogoIcon, "LinkedIn"),
      new Social("https://github.com", GitHubLogoIcon, "GitHub"),
    ]
  ),
  2: new Profile(
    "Jane Doe",
    null,
    "Quam feugiat pellentesque aliquet molestie fames sapien. Pellentesque commodo mollis felis auctor elit natoque dignissim.",
    "https://placebear.com/250/250",
    []
  ),
};

export default profiles;
