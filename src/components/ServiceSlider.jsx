"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { fadeIn } from "@/lib/variants";
import { serviceData } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

function ServiceSlider() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 sm:mb-12 xl:grid-cols-3 xl:gap-6"
    >
      {serviceData.map((item, index) => (
        <motion.article
          key={index}
          variants={cardVariants}
          className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-white/10 sm:p-6"
        >
          <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-xl text-accent">
            {item.icon}
          </div>

          <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">
            {item.title}
          </h3>

          <p className="mb-4 flex-1 text-sm leading-relaxed text-white/60">
            {item.description}
          </p>

          {item.tags?.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[10px] text-accent sm:text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.article>
      ))}
    </motion.section>
  );
}

function ServicesCta() {
  return (
    <motion.aside
      variants={fadeIn("up", 0.45)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm sm:p-8 xl:text-left"
    >
      <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
        Have a project in mind?
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-white/60">
        Let&apos;s build something together — from idea to deployment.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent/80 px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
      >
        Get in touch
        <RxArrowTopRight className="text-base" />
      </Link>
    </motion.aside>
  );
}

export { ServiceSlider, ServicesCta };
