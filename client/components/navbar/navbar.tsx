"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TitleCard from "../title/title-card";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface NavigationLink {
  label: string;
  url: string;
}

const navigationLinks: NavigationLink[] = [
  { label: "Home", url: "/" },
  { label: "Stats", url: "/stats" },
  { label: "Candidates", url: "/candidates" },
  { label: "FAQ", url: "/faq" },
  { label: "Support Us", url: "/support-us" },
];

const NavigationLinkDesktop = ({
  link,
  isActive,
}: {
  link: NavigationLink;
  isActive: boolean;
}) => {
  return (
    <Link
      href={link.url}
      className={clsx(
        buttonVariants({ variant: "link" }),
        "text-white hover:text-accent transition-colors duration-200",
        isActive && "underline underline-offset-8 decoration-border",
      )}
    >
      {link.label}
    </Link>
  );
};

const NavigationLinkMobile = ({
  link,
  isActive,
  onClick,
}: {
  link: NavigationLink;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Link
      href={link.url}
      onClick={onClick}
      className={clsx(
        "text-white hover:text-accent transition-colors duration-300 text-2xl font-medium py-3 block w-full",
        isActive ? "text-accent" : "text-white",
      )}
    >
      {link.label}
    </Link>
  );
};

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
            className={`${buttonVariants({ variant: "link" })}, ${isActive ? "underline  " : ""} text-white underline-offset-8 decoration-border`}
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
