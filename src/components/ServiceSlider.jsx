"use client";

import { serviceData } from "@/lib/data";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { RxArrowTopRight } from "react-icons/rx";

function ServiceSlider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] md:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="relative h-full bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex flex-col gap-4 cursor-pointer group transition-all duration-300 hover:bg-[rgba(65,47,123,0.3)]">
              {/* icons */}
              <div className="text-4xl text-accent">{item.icon}</div>
              {/* text desc */}
              <div className="flex-1">
                <div className="text-lg font-semibold mb-2">{item.title}</div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="absolute bottom-4 right-4 text-3xl text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                <RxArrowTopRight />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ServiceSlider;
