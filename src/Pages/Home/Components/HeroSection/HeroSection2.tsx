import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const HeroSection2: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full max-w-3xl mx-auto relative py-10">

      {/* Prev Button */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                   bg-black text-white px-4 py-2 rounded"
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                   bg-black text-white px-4 py-2 rounded"
      >
        Next
      </button>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1.3}
        centeredSlides
        spaceBetween={24}
        loop
        loopAdditionalSlides={5}
        speed={600}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        navigation
      >
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide key={item}>
            <div className="h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg">
              Slide {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection2;
