"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "_ai work", href: "/" },
  { label: "_copywriting", href: "/copywriting" },
  { label: "_about", href: "/about" },
] as const;

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header
      className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start bg-white w-full sticky top-0 z-50"
      style={{ padding: "20px 30px", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <Link
        href="/"
        className="no-underline font-normal whitespace-nowrap flex flex-col"
        style={{ fontSize: "15px" }}
      >
        <span className="text-black">oğuzcan önver</span>
        <span style={{ color: "#ff0000" }}>ai filmmaker / creative copywriter</span>
      </Link>
      <nav className="flex gap-x-5 gap-y-1 flex-wrap sm:justify-end" style={{ paddingTop: "2px" }}>
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-black no-underline",
              pathname === href && "underline"
            )}
            style={{ fontSize: "15px", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
