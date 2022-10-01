// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./index.css";
import CardPropostas from "../CardPropostas";

function CarrosselPropostas() {
  return (
    <div className="w-100">
      <p className="titulo rounded-5">Propostas recebidas</p>
      <div className=" mt-5 w-75 border container pt-5 pb-4 p-0 rounded-5">
        <Swiper
          spaceBetween={1}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <CardPropostas />
          </SwiperSlide>
          <SwiperSlide>
            <CardPropostas />
          </SwiperSlide>
          <SwiperSlide>
            <CardPropostas />
          </SwiperSlide>
          <SwiperSlide>
            <CardPropostas />
          </SwiperSlide>
          <SwiperSlide>
            <CardPropostas />
          </SwiperSlide>
          <SwiperSlide>
            <CardPropostas />
          </SwiperSlide>
          <SwiperSlide>
            <CardPropostas />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CarrosselPropostas;
