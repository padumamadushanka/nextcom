"use client"; // ✅ Required in Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // ✅ Core Swiper styles
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slider({ slides, autoplay, loop }) {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={autoplay} // ✅ Dynamic autoplay prop
        loop={loop} // ✅ Dynamic loop prop
      >
        {slides.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
