import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import CardDesafios from "../CardDesafios";

export default function CarrosselDesafio() {
  return (
    <div className="carrosseldesafio mt-5 w-100 ">
      <h1 className="h1home text-dark ">Desafios do Mês</h1>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper mt-3 position-relative"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <CardDesafios />
        </SwiperSlide>
        <SwiperSlide>
          <CardDesafios />
        </SwiperSlide>
        <SwiperSlide>
          <CardDesafios />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
