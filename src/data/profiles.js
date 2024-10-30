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
    this.avatar = avatar; // String (link to an external or local image file)
    this.socials = socials; // array of Social
  }
}

class Social {
  constructor(link, logo, name) {
    this.link = link; // String (link to social media)
    this.Logo = logo; // icon component
    this.name = name; // String (accessible name for the link)
  }
}

// reusable profile data to use in components
const profiles = {
  0: new Profile(
    "Adrian Davies", // name
    "Founder & CEO", // role
    "Background in tech and law, as well as previous founding experience.", // bio
    "/avatars/adrian.jpg", // avatar
    [
      new Social(
        "https://www.linkedin.com/adriandav",
        LinkedInLogoIcon,
        "LinkedIn"
      ),
    ] // socials
  ),
  1: new Profile(
    "Dani Daoud",
    "Co-Founder & CTO",
    "Background in tech, with a focus on embedded systems and IoT.",
    "/avatars/dani.png",
    [
      // new Social("https://instagram.com", InstagramLogoIcon, "Instagram"),
      // new Social("https://www.linkedin.com", LinkedInLogoIcon, "LinkedIn"),
      // new Social("https://github.com", GitHubLogoIcon, "GitHub"),
    ]
  ),
  2: new Profile(
    "Jane Doe",
    "Person 3",
    "Quam feugiat pellentesque aliquet molestie fames sapien. Pellentesque commodo mollis felis auctor elit natoque dignissim.",
    "https://placebear.com/250/250",
    []
  ),
};

export default profiles;
