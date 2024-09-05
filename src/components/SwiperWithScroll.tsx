"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Mousewheel]);

const SwiperWithScroll: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (swiperRef.current) {
        if (event.deltaY > 0) {
          swiperRef.current.slideNext(); // Scroll down, move to the next slide
        } else {
          swiperRef.current.slidePrev(); // Scroll up, move to the previous slide
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const prevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const nextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative w-full">
      <button className="absolute left-3 z-20" onClick={prevClick}>
        <img src="./left.png" className="w-4 opacity-50" alt="" />
      </button>
      <button className="absolute right-3 z-20" onClick={nextClick}>
        <img src="./right.png" className="w-4 opacity-50" alt="" />
      </button>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={50}
        slidesPerView={1}
        mousewheel={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperWithScroll;
