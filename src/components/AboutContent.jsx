"use client";

import { motion } from "framer-motion";
import Tooltip from "@/components/Tooltip";
import { aboutData } from "@/lib/data";

const tabContentVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.25, 0.25, 0.75] },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

function AboutMeTab({ info }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
        <p className="text-sm leading-relaxed text-white/75 sm:text-base">
          {info[0]?.infos?.[0]}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { value: "3+", label: "Front-End" },
          { value: "1+", label: "Back-End" },
          { value: "Full", label: "Stack Dev" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur-sm"
          >
            <div className="text-lg font-bold text-accent sm:text-xl">
              {stat.value}
            </div>
            <div className="mt-1 text-[10px] text-white/50 sm:text-xs">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const skillCategoryStyles = {
  "Core Languages": {
    gradient: "from-orange-500/20 via-transparent to-transparent",
    border: "group-hover:border-orange-500/40",
    glow: "group-hover:shadow-orange-500/20",
  },
  Libraries: {
    gradient: "from-cyan-400/20 via-transparent to-transparent",
    border: "group-hover:border-cyan-400/40",
    glow: "group-hover:shadow-cyan-400/20",
  },
  "UI & Styling": {
    gradient: "from-pink-500/20 via-transparent to-transparent",
    border: "group-hover:border-pink-500/40",
    glow: "group-hover:shadow-pink-500/20",
  },
  Backend: {
    gradient: "from-green-500/20 via-transparent to-transparent",
    border: "group-hover:border-green-500/40",
    glow: "group-hover:shadow-green-500/20",
  },
  "Headless CMS": {
    gradient: "from-red-400/20 via-transparent to-transparent",
    border: "group-hover:border-red-400/40",
    glow: "group-hover:shadow-red-400/20",
  },
  Management: {
    gradient: "from-purple-500/20 via-transparent to-transparent",
    border: "group-hover:border-purple-500/40",
    glow: "group-hover:shadow-purple-500/20",
  },
  Tools: {
    gradient: "from-accent/25 via-transparent to-transparent",
    border: "group-hover:border-accent/50",
    glow: "group-hover:shadow-accent/25",
  },
};

const skillsGridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
};

function getSkillLabel(tooltip) {
  if (!tooltip) return null;
  return tooltip.split(" - ")[0]?.trim();
}

function SkillIcon({ iconData, index }) {
  const icon =
    typeof iconData === "object" && iconData.icon ? iconData.icon : iconData;
  const tooltip =
    typeof iconData === "object" && iconData.tooltip ? iconData.tooltip : null;
  const label = getSkillLabel(tooltip);

  const cell = (
    <div className="group/skill flex flex-col items-center gap-2">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-primary/60 text-2xl text-white shadow-inner transition-all duration-300 group-hover/skill:border-accent/50 group-hover/skill:bg-accent/10 group-hover/skill:shadow-lg group-hover/skill:shadow-accent/20 sm:h-16 sm:w-16 sm:text-3xl">
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover/skill:opacity-100" />
        <span className="relative z-10">{icon}</span>
      </div>
      {label && (
        <span className="max-w-[72px] truncate text-center text-[10px] font-medium text-white/50 transition-colors group-hover/skill:text-accent sm:text-[11px]">
          {label}
        </span>
      )}
    </div>
  );

  return tooltip ? (
    <Tooltip key={index} content={tooltip}>
      {cell}
    </Tooltip>
  ) : (
    <div key={index}>{cell}</div>
  );
}

function SkillsTab({ info }) {
  const totalSkills = info.reduce(
    (sum, group) => sum + (group.icons?.length || 0),
    0,
  );

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/10 via-white/5 to-accent/5 px-4 py-4 text-center backdrop-blur-sm sm:flex-row sm:justify-between sm:px-6 sm:text-left xl:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Tech stack
          </p>
          <p className="mt-1 text-sm text-white/60">
            Tools & technologies I use to build modern apps
          </p>
        </div>
        <div className="flex shrink-0 items-baseline gap-1 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
          <span className="text-2xl font-bold text-accent">{totalSkills}+</span>
          <span className="text-xs text-white/50">skills</span>
        </div>
      </div>

      <motion.div
        variants={skillsGridVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {info.map((group, i) => {
          const title = group.title?.trim() || "";
          const style = skillCategoryStyles[title] || skillCategoryStyles.Tools;
          const isWide = title === "Backend" || title === "UI & Styling";

          return (
            <motion.article
              key={i}
              variants={skillCardVariants}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.08] sm:p-6 ${style.border} ${
                isWide ? "sm:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-60`}
              />

              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                    {title}
                  </h4>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/60">
                    {group.icons?.length || 0}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
                  {group.icons?.map((iconData, j) => (
                    <SkillIcon key={j} iconData={iconData} index={j} />
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}

function ExperienceTab({ info }) {
  return (
    <div className="relative flex flex-col gap-6">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 sm:left-[9px]" />

      {info.map((job, i) => (
        <article key={i} className="relative pl-8 sm:pl-10">
          <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-primary sm:h-5 sm:w-5" />

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <h4 className="text-base font-semibold text-white sm:text-lg">
                {job.title}
              </h4>
              {job.stage && (
                <span className="shrink-0 text-sm font-medium text-accent">
                  {job.stage}
                </span>
              )}
            </div>
            {job.infos?.map((text, j) => (
              <p
                key={j}
                className="text-sm leading-relaxed text-white/65 sm:text-base"
              >
                {text}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function AboutTabPanel({ tabIndex }) {
  const section = aboutData[tabIndex];
  if (!section) return null;

  let content = null;
  if (tabIndex === 0) content = <AboutMeTab info={section.info} />;
  else if (tabIndex === 1) content = <SkillsTab info={section.info} />;
  else if (tabIndex === 2) content = <ExperienceTab info={section.info} />;

  return (
    <motion.div
      variants={tabContentVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="w-full"
    >
      {content}
    </motion.div>
  );
}

export default AboutTabPanel;
