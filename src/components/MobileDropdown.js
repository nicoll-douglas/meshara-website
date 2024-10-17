import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import InternalLink from "./common/InternaLink";

export default function MobileDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton
          variant="surface"
          id="mobile-dropdown"
          style={{ display: "none" }}
          aria-label="Menu"
        >
          <HamburgerMenuIcon aria-hidden={true} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <nav>
          <DropdownMenu.Item>
            <InternalLink href={"/about"}>About Us</InternalLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <InternalLink href="/how-it-works">How It Works</InternalLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <InternalLink href="/team">Our Team</InternalLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <InternalLink href={"/investors"}>For Investors</InternalLink>
          </DropdownMenu.Item>
        </nav>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
