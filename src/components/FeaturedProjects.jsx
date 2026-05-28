"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import { fadeIn } from "@/lib/variants";
import { featuredProjects } from "@/lib/data";

function ProjectVideo({ src, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={`${title} project preview`}
      className="h-full w-full object-contain"
    />
  );
}

function FeaturedCard({ project, featured = false }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 ${
        featured
          ? "border-accent/40 shadow-lg shadow-accent/10 lg:grid lg:grid-cols-2 lg:items-stretch"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-black/80 ${
          featured ? "aspect-video lg:aspect-auto lg:min-h-[280px]" : "aspect-video"
        }`}
      >
        <ProjectVideo src={project.video} title={project.title} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              <BsStarFill className="text-[10px]" />
              {project.badge}
            </span>
          )}
          <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center p-4 sm:p-6">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-accent sm:text-xl">
            {project.title}
          </h3>
          {!featured && (
            <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
              {project.badge}
            </span>
          )}
        </div>

        <p className="mb-4 text-sm leading-relaxed text-white/65 sm:text-[15px]">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] text-accent sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent/80 px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] sm:w-auto"
        >
          View Live Project
          <BsArrowRight className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

function FeaturedProjects() {
  const [mainProject, ...otherFeatured] = featuredProjects;

  return (
    <section className="relative z-10 mb-10 sm:mb-14">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mb-5 sm:mb-6"
      >
        <h2 className="section-title">
          Featured Work <span className="text-accent">.</span>
        </h2>
        <p className="max-w-2xl text-sm text-white/60">
          Real-world projects with live demos — from full-stack platforms to
          e-commerce experiences.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mb-5 sm:mb-6"
      >
        <FeaturedCard project={mainProject} featured />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2"
      >
        {otherFeatured.map((project) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

export default FeaturedProjects;
