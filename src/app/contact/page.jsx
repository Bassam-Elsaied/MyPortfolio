"use client";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import { contactInfo } from "@/lib/data";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { RiMailLine, RiMapPinLine, RiTimeLine } from "react-icons/ri";

const contactCards = [
  {
    icon: RiMailLine,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: RiMapPinLine,
    label: "Location",
    value: contactInfo.location,
  },
  {
    icon: RiTimeLine,
    label: "Response time",
    value: contactInfo.responseTime,
  },
];

export default function ContactPage() {
  return (
    <div
      className="page-scroll relative bg-primary/30 pt-28 pb-28 md:pt-36 md:pb-32"
      data-scroll-container
    >
      <Circles />

      <div className="pointer-events-none hidden md:block">
        <Bulb />
      </div>

      <div className="container relative z-20 mx-auto max-w-6xl px-4">
        <motion.header
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-8 flex flex-col gap-3 text-center sm:mb-10 xl:text-left"
        >
          <h2 className="section-title mb-0">
            Let&apos;s connect <span className="text-accent">.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base xl:mx-0">
            Have a project in mind or want to collaborate? Send a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 text-center xl:text-left"
          >
            <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent xl:mx-0">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {contactInfo.availability}
            </span>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="text-lg" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="mb-0.5 text-xs uppercase tracking-wide text-white/40">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="break-all text-sm font-medium text-white transition-colors hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 xl:items-start">
              <p className="mb-0 text-sm text-white/50">Find me on</p>
              <Socials />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
          >
            <h3 className="mb-1 text-lg font-semibold text-white">Send a message</h3>
            <p className="mb-6 text-sm text-white/50">
              Fill out the form below and I&apos;ll reply within 24 hours.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
