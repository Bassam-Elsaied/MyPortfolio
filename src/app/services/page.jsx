"use client";

import Bulb from "@/components/Bulb";
import ServiceSlider from "@/components/ServiceSlider";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

function page() {
  return (
    <div className="page-scroll relative bg-primary/30 pt-28 pb-32 md:pt-36 md:pb-36" data-scroll-container>
      <div className="container relative z-20 mx-auto max-w-6xl px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-8 text-center xl:mb-10 xl:text-left"
        >
          <h2 className="section-title">
            My services <span className="text-accent">.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base xl:mx-0">
            Full-stack development, e-commerce platforms, and modern web
            applications — from UI design to back-end APIs and deployment.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <ServiceSlider />
        </motion.div>
      </div>

      <Bulb />
    </div>
  );
}

export default page;
