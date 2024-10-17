import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function ButtonLink({ children, href, ...props }) {
  return (
    <Button size={"4"} variant="surface" highContrast={true} asChild {...props}>
      <Link href={href}>
        {children}
        <ArrowRightIcon />
      </Link>
    </Button>
  );
}
