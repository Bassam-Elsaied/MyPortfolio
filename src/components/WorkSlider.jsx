//data
import { workSlides } from "@/lib/data";

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
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] md:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="h-[160px] md:h-[220px] rounded-lg relative overflow-hidden flex items-center justify-center group"
                  >
                    {/* image */}
                    <Image
                      src={image.path}
                      fill
                      className="object-cover"
                      alt="work"
                    />
                    {/* inner gradient */}
                    <Link
                      href={image.URL ? image.URL : "#"}
                      target="_blank"
                      className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 duration-700 transition-all"
                    ></Link>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-tranlate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">Live</div>
                        <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-300">
                          Demo
                        </div>
                        <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all delay-200 duration-300 text-xl">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default WorkSlider;
