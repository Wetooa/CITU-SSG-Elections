"use client";

import Link from "next/link";
import TitleCard from "../title/title-card";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="rounded-xl border flex items-center gap-2 px-6 py-2 m-2 flex-end">
      <TitleCard className="mr-auto" />

      {[
        { label: "Home", url: "/" },
        { label: "Stats", url: "/stats" },
        { label: "Candidates", url: "/candidates" },
        { label: "FAQ", url: "/faq" },
        { label: "Support Us", url: "/support-us" },
      ].map(({ label, url }, index) => {
        const isActive = pathname === url;

        return (
          <Link
            className={`${buttonVariants({ variant: "link" })} ${isActive ? "underline" : ""}`}
            key={index}
            href={url}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
