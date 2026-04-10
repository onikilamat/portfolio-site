"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "_work", href: "/" },
  { label: "_about", href: "/about" },
  { label: "_awards", href: "/awards" },
  { label: "_personal projects", href: "/personal-projects" },
] as const;

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header
      className="flex justify-between items-start bg-white w-full sticky top-0 z-50"
      style={{ padding: "20px 30px" }}
    >
      <Link
        href="/"
        className="text-black no-underline font-normal whitespace-nowrap"
        style={{ fontSize: "13px" }}
      >
        jaime ludeña
      </Link>
      <nav className="flex gap-5 flex-wrap justify-end">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-black no-underline",
              pathname === href && "underline"
            )}
            style={{ fontSize: "13px" }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
