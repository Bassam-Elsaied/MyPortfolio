//data
import { projects } from "@/lib/data";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icon
import { BsArrowRight } from "react-icons/bs";

function WorkSlider() {
  return (
    <section className="relative z-10">
      <h2 className="section-title mb-5">
        Other Projects <span className="text-accent">.</span>
      </h2>
      <Swiper
      spaceBetween={20}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="work-slider relative h-auto pb-14"
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {projects.map((project, index) => {
        return (
          <SwiperSlide key={index} className="!h-auto !p-1">
            <div className="group flex h-full w-full flex-col rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="relative mb-4 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="mb-2 min-h-[3.5rem] text-lg font-bold text-white transition-colors group-hover:text-[var(--color-accent)] sm:text-xl">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-3 min-h-[4.5rem] flex-1 text-xs leading-relaxed text-white/60 sm:text-sm">
                  {project.description}
                </p>

                <div className="mb-4 flex min-h-[2rem] flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/20 px-2 py-1 text-xs text-[var(--color-accent)] sm:px-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex w-full items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]/80 px-3 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 sm:gap-2 sm:py-3 sm:text-base"
                >
                  View Project
                  <BsArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </section>
  );
}

export default WorkSlider;
