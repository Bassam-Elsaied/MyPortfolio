"use client";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

function page() {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-0"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Project Highlights: Successfully developed a Portfolio Website,
              Ecommerce Website with CMS using Sanity, Budget App with React.js,
              and more.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            className="h-full xl:max-w-[65%]"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}

export default page;
