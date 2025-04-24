"use client";

import Link from "next/link";
import TitleCard from "../title/title-card";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-xl border flex items-center gap-2 px-6 py-2 m-2 bg-background shadow-md z-50"
    >
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
            key={index}
            href={url}
            className={clsx(
              buttonVariants({ variant: "link" }),
              "text-white hover:text-accent transition-colors duration-200",
              isActive && "underline underline-offset-8 decoration-border",
            )}
          >
            {label}
          </Link>
        );
      })}
    </motion.nav>
  );
}
