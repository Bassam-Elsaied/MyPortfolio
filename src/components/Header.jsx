"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Socials from "./Socials";

const SCROLL_DELTA = 10;

function Header() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollTop = useRef(0);
  const scrollContainerRef = useRef(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    setVisible(true);
    setScrolled(false);
    lastScrollTop.current = 0;
  }, [pathname]);

  useEffect(() => {
    let rafId1 = 0;
    let rafId2 = 0;

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) {
        setVisible(true);
        setScrolled(false);
        return;
      }

      const current = container.scrollTop;
      const delta = current - lastScrollTop.current;

      setScrolled(current > 24);

      if (current <= 24) {
        setVisible(true);
      } else if (delta > SCROLL_DELTA) {
        setVisible(false);
      } else if (delta < -SCROLL_DELTA) {
        setVisible(true);
      }

      lastScrollTop.current = current;
    };

    const setup = () => {
      scrollContainerRef.current = document.querySelector(
        "[data-scroll-container]"
      );
      const container = scrollContainerRef.current;

      if (container) {
        container.scrollTop = 0;
        lastScrollTop.current = 0;
        setVisible(true);
        setScrolled(false);
        container.addEventListener("scroll", handleScroll, { passive: true });
      }
    };

    rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(setup);
    });

    return () => {
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
      scrollContainerRef.current?.removeEventListener("scroll", handleScroll);
      scrollContainerRef.current = null;
    };
  }, [pathname]);

  return (
    <motion.header
      initial={false}
      animate={{
        y: visible ? 0 : "-110%",
        opacity: visible ? 1 : 0,
      }}
      transition={{
        y: visible
          ? { type: "spring", stiffness: 380, damping: 32, mass: 0.8 }
          : { duration: 0.28, ease: [0.4, 0, 1, 1] },
        opacity: { duration: visible ? 0.25 : 0.18, ease: "easeOut" },
      }}
      className={`fixed top-0 left-0 z-40 flex w-full items-center xl:h-[90px] ${
        scrolled && visible
          ? "border-b border-white/10 py-3 shadow-lg shadow-black/20"
          : "py-2"
      }`}
    >
      <div
        className={`absolute inset-0 -z-10 transition-all duration-500 ease-out ${
          scrolled && visible
            ? "bg-primary/80 backdrop-blur-md"
            : "bg-transparent backdrop-blur-none"
        }`}
      />

      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col items-center justify-between gap-y-4 lg:flex-row lg:gap-y-6">
          <Link href="/" className="text-center text-3xl">
            <span className="font-bold text-accent xl:text-5xl">Bassam</span>{" "}
            Elsayed.
          </Link>
          <Socials />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
