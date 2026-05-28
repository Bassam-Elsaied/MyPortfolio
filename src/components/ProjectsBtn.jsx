"use client";

import CircularText from "@/components/CircularText";
import { HiArrowDownTray } from "react-icons/hi2";

const CV_PATH = "/Bassm-elsayed-frontEnd.pdf";
const CV_FILENAME = "Bassam-Elsayed-CV.pdf";

function ProjectsBtn() {
  return (
    <div className="mx-auto z-10 xl:mx-0">
      <a
        href={CV_PATH}
        download={CV_FILENAME}
        aria-label="Download my CV"
        className="group relative flex h-[165px] w-[165px] items-center justify-center bg-circle-star bg-cover bg-center bg-no-repeat"
      >
        <CircularText
          text="DOWNLOAD*MY*CV*"
          spinDuration={12}
          size={148}
          radius={35}
          spacing={0.9}
          className="h-[148px] w-[148px]"
          letterClassName="text-[10px] font-semibold tracking-tighter"
        />
        <HiArrowDownTray className="pointer-events-none absolute text-4xl transition-all duration-300 group-hover:translate-y-1 group-hover:text-accent" />
      </a>
    </div>
  );
}

export default ProjectsBtn;
