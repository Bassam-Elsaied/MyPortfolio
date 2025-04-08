"use client";

import { useState } from "react";
import Circles from "@/components/Circles";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { aboutData } from "@/lib/data";

function AboutPage() {
  const [index, setIndex] = useState(0);

  return (
    <div className=" bg-primary/30 py-20 md:py-32 text-center xl:text-left h-full ">
      <Circles />
      <motion.div
        className="hidden xl:flex absolute bottom-0 -left-[319px] mix-blend-color-dodge"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar />
      </motion.div>

      <div className="container mt-5 mx-auto flex flex-col justify-center items-center xl:flex-row gap-x-4 px-4  ">
        <div className="flex flex-col w-full xl:max-w-[750px] h-full">
          {/* Tabs */}
          <div className="flex justify-center xl:justify-start gap-x-4 xl:gap-x-8 mb-2 flex-wrap z-50">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onClick={() => setIndex(itemIndex)}
                className={`cursor-pointer mb-2 capitalize xl:text-lg relative after:h-[2px] after:absolute after:left-0 after:-bottom-1 transition-all
                  ${
                    index === itemIndex
                      ? "text-accent after:w-full after:bg-accent"
                      : "text-white/70 hover:text-accent after:w-8 after:bg-white/50"
                  }
                `}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-6 flex flex-col md:gap-y-6 items-center h-full">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="w-full  ">
                <div className="flex flex-col md:flex-row md:items-center  gap-2 md:gap-4">
                  <div className="md:text-lg text-medium font-semibold text-white">
                    {item.title}
                  </div>

                  {/* Icons */}
                  {item.icons?.length > 0 && (
                    <div className="flex flex-wrap gap-4 md:text-2xl justify-center text-white/90">
                      {item.icons.map((icon, i) => (
                        <span key={i}> {icon}</span>
                      ))}
                    </div>
                  )}

                  <div className="text-medium text-accent font-medium ">
                    {item.stage}
                  </div>
                </div>

                {/* Infos */}
                {item.infos?.length > 0 && (
                  <div className="mt-1 flex flex-col gap-2 text-white/80 text-sm break-words max-w-full bg-white/5 p-4 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm overflow-hidden ">
                    {item.infos.map((info, i) => (
                      <div
                        key={i}
                        className="leading-relaxed text-sm md:text-xl"
                      >
                        {info}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
