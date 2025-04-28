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

  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const [isScrolling, setScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // helper function cus cannot set tailwind media points in animate variants
  const getMarginInline = () => {
    if (!isScrolling) return "0rem";

    if (windowWidth >= 1280) return "8rem"; // xl screens
    if (windowWidth >= 1024) return "4rem"; // lg screens
    if (windowWidth >= 768) return "2rem"; // md screens
    return "0.5rem"; // sm and below
  };

  // this one handles the resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ths one handles the scrolling
  useEffect(() => {
    const handleScroll = () => {
      const thresholdY = 50;
      setScrolling(window.scrollY > thresholdY);
    };

    const throttleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttleScroll);

    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);

  // this one just prevents the user from scrolling if the mobile menu is open :DD
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          top: isScrolling ? "1rem" : "0.4rem",
          borderRadius: isScrolling ? "100rem" : "0rem",
          boxShadow: isScrolling
            ? "0 8px 20px rgba(0, 0, 0, 0.1)"
            : "0 2px 4px rgba(0, 0, 0, 0)",
          backdropFilter: isScrolling ? "blur(10px)" : "blur(0px)",
          marginInline: getMarginInline(),
          border: isScrolling
            ? "1px solid rgba(249, 143, 143, 0.5)"
            : "1px solid transparent",
          backgroundColor: isScrolling
            ? "rgba(24, 24, 27, 0.3)"
            : "transparent",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          backdropFilter: { delay: 0, duration: 0.3 },
          border: { delay: 0.2, duration: 0.3 },
          marginInline: { delay: 0.3, duration: 0.4 },
        }}
        className="sticky inset-x-0 z-50 bg-transparent"
      >
        <div className="flex items-center px-4 py-1 justify-between mx-4">
          {/* Logo (COMELEC, TTSP, TTSP-2) */}
          <TitleCard />

          {/* Desktop Links */}
          <div className="md:flex justify-between hidden">
            {navigationLinks.map((link, index) => (
              <NavigationLinkDesktop
                key={index}
                link={link}
                isActive={pathname === link.url}
              />
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => toggleMobileMenu((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              size="lg"
            />
          </button>
        </div>

        {/* Full Screen Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 h-screen z-40 md:hidden flex flex-col overflow-y-auto"
            >
              <div className="flex flex-col items-center justify-center h-full w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="flex flex-col items-center space-y-8 w-full px-8"
                >
                  {navigationLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                      className="w-full text-center"
                    >
                      <NavigationLinkMobile
                        link={link}
                        isActive={pathname === link.url}
                        onClick={() => toggleMobileMenu(false)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* This is just the background for the mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 min-w-screen w-full min-h-screen h-full bg-zinc-900/95 backdrop-blur-md z-40 md:hidden"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
