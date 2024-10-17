import Link from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

export default function InternalLink({ href, children, ...props }) {
  return (
    <RadixLink asChild {...props}>
      <Link href={href}>{children}</Link>
    </RadixLink>
  );
}
