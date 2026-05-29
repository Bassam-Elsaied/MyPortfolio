"use client";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import { ServiceSlider, ServicesCta } from "@/components/ServiceSlider";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

const highlights = [
  { value: "3+", label: "Years Front-End" },
  { value: "1+", label: "Year Back-End" },
  { value: "60+", label: "Projects Delivered" },
];

function ServicesPage() {
  return (
    <div
      className="page-scroll relative bg-primary/30 pt-28 pb-28 md:pt-36 md:pb-32"
      data-scroll-container
    >
      <Circles />

      <div className="container relative z-20 mx-auto max-w-6xl px-4">
        <motion.header
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-6 flex flex-col gap-3 text-center sm:mb-8 xl:text-left"
        >
          <h2 className="section-title mb-0">
            My services <span className="text-accent">.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base xl:mx-0">
            Full-stack development, e-commerce platforms, and modern web
            applications — from UI design to back-end APIs and deployment.
          </p>
        </motion.header>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-8 grid grid-cols-3 gap-3 sm:mb-10 sm:gap-4"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-4 backdrop-blur-sm sm:px-4 sm:py-5"
            >
              <span className="text-xl font-bold text-accent sm:text-3xl">
                {item.value}
              </span>
              <span className="mt-1.5 text-center text-[10px] leading-tight text-white/50 sm:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        <ServiceSlider />
        <ServicesCta />
      </div>

      <div className="pointer-events-none hidden md:block">
        <Bulb />
      </div>
    </div>
  );
}

export default ServicesPage;
