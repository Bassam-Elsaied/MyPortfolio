"use client";

import Avatar from "@/components/Avatar";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-primary/60 h-full ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full  container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-10"
          >
            Welcome to My Portfolio! Self-Taught Frontend Developer with
            Dedication, Quick Learning, and Collaborative Spirit.
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div className="bg-none xl:bg-[url('/bg-explosion.png')] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
      </div>
      <ParticlesContainer />

      {/* avatar */}
      <motion.div
        className="w-full h-full max-w-[450px] max-h-[450px] absolute -bottom-32 lg:bottom-0 lg:right-0"
        variants={fadeIn("up", 0.5)}
        transition={{ duration: 1, ease: "easeInOut" }}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar />
      </motion.div>
    </div>
  );
}
