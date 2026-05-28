"use client";

import { serviceData } from "@/lib/data";
import { RxArrowTopRight } from "react-icons/rx";

function ServiceSlider() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {serviceData.map((item, index) => (
        <article
          key={index}
          className="group relative flex min-h-[220px] flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/10 sm:p-6"
        >
          <div className="text-4xl text-accent">{item.icon}</div>

          <div className="flex flex-1 flex-col">
            <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-accent">
              {item.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-white/60">
              {item.description}
            </p>
          </div>

          <div className="absolute right-4 bottom-4 text-2xl text-accent opacity-0 transition-opacity group-hover:opacity-100">
            <RxArrowTopRight />
          </div>
        </article>
      ))}
    </div>
  );
}

export default ServiceSlider;
