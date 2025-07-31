//data
import { projects, workSlides } from "@/lib/data";

//image
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icon
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

function WorkSlider() {
  return (
    <Swiper
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[350px] sm:h-[400px] md:h-[500px]"
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
          <SwiperSlide key={index}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 group cursor-pointer hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
              <div className="relative overflow-hidden rounded-lg mb-4 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full border border-[var(--color-accent)]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]/80 rounded-lg font-medium text-white text-center hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/25 text-sm sm:text-base"
                >
                  View Project
                  <BsArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default WorkSlider;
