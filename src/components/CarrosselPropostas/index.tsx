// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./index.css";
import "react-multi-carousel/lib/styles.css";
import CardPropostas from "../CardPropostas";
import { Button } from "react-bootstrap";
function CarrosselPropostas() {
  return (
    <div className="w-100">
      {/* <Button className="titulo rounded-5">Propostas recebidas</Button> */}
      <div className=" mt-5 w-75 border container pt-5 pb-4 p-0 rounded-5">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          breakpoints={{
            0: {
              width: 0,
              slidesPerView: 1,
            },
            450: {
              width: 540,
              slidesPerView: 2,
            },
            900: {
              width: 768,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="container">
            <SwiperSlide>
              <CardPropostas />
            </SwiperSlide>
          </div>
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
