"use client";

import { useState } from "react";
import Circles from "@/components/Circles";
import AboutTabPanel from "@/components/AboutContent";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { aboutData } from "@/lib/data";
import Bulb from "@/components/Bulb";

function AboutPage() {
  const [index, setIndex] = useState(0);

  return (
    <div
      className="page-scroll relative bg-primary/30 pt-28 pb-28 text-center md:pt-36 md:pb-32 xl:text-left"
      data-scroll-container
    >
      <Circles />

      <motion.div
        className="pointer-events-none absolute bottom-0 -left-[319px] z-10 hidden mix-blend-color-dodge xl:block"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Bulb />
      </motion.div>

      <div className="container relative z-20 mx-auto max-w-4xl px-4 xl:max-w-6xl">
        <motion.header
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-6 flex flex-col gap-3 text-center sm:mb-8 xl:text-left"
        >
          <h2 className="section-title mb-0">
            About me <span className="text-accent">.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base xl:mx-0">
            Full-Stack Developer — building modern web apps from UI to APIs.
          </p>
        </motion.header>

        <motion.nav
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 xl:justify-start"
          aria-label="About sections"
        >
          {aboutData.map((item, itemIndex) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setIndex(itemIndex)}
              className={`rounded-full border px-4 py-2 text-sm capitalize transition-all duration-300 sm:px-5 sm:text-base ${
                index === itemIndex
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {item.title.replace(/-/g, " ")}
            </button>
          ))}
        </motion.nav>

        <AnimatePresence mode="wait">
          <AboutTabPanel key={index} tabIndex={index} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AboutPage;
