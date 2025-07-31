"use client";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import WorkSlider from "@/components/WorkSlider";

function page() {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          {/* <div className="hidden xl:flex text-center  xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
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
              I’m a passionate Front-End Developer with a deep focus on crafting
              fast, scalable, and intuitive user interfaces using React,
              Next.js, and modern web technologies. With a keen eye for design
              and performance, I transform complex ideas into seamless digital
              experiences that drive engagement and business success.
            </motion.p>
          </div> */}
          {/* slider */}
          <motion.div
            className="h-full w-full"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}

export default page;
