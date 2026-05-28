"use client";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import FeaturedProjects from "@/components/FeaturedProjects";
import WorkSlider from "@/components/WorkSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

function page() {
  return (
    <div className="page-scroll relative bg-primary/30 pt-28 pb-32 md:pt-36 md:pb-36" data-scroll-container>
      <Circles />
      <Bulb />

      <div className="container relative z-20 mx-auto px-4">
        <motion.div
          className="w-full"
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <FeaturedProjects />
          <WorkSlider />
        </motion.div>
      </div>
    </div>
  );
}

export default page;
