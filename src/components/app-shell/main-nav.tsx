import { Link } from "@heroui/react";

const navigation = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Game",
    href: "/game",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

export function MainNav({collapsed}) {
  return (
    <nav>
      {navigation.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}