// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./index.css";
import "react-multi-carousel/lib/styles.css";
import CardGrupos from "../CardGrupos";
import { Navigation } from "swiper";

function CarrosselGruposRecomendados() {
  return (
    <div>
      <h1 className="h1home text-dark mt-5 mb-3">Recomendados para você</h1>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={false}
        spaceBetween={10}
        breakpoints={{
          0: {
            width: 0,
            slidesPerView: 1,
          },
          450: {
            width: 450,
            slidesPerView: 1,
          },
          900: {
            width: 768,
            slidesPerView: 2,
          },
          1200: {
            width: 1200,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <CardGrupos name="exemplo1" books="exemblobook" updated_at="x" />
        </SwiperSlide>

        <SwiperSlide>
          <CardGrupos name="exemplo1" books="exemblobook" updated_at="x" />
        </SwiperSlide>
        <SwiperSlide>
          <CardGrupos name="exemplo1" books="exemblobook" updated_at="x" />
        </SwiperSlide>
        <SwiperSlide>
          <CardGrupos name="exemplo1" books="exemblobook" updated_at="x" />
        </SwiperSlide>
        <SwiperSlide>
          <CardGrupos name="exemplo1" books="exemblobook" updated_at="x" />
        </SwiperSlide>
        <SwiperSlide>
          <CardGrupos name="exemplo1" books="exemblobook" updated_at="x" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default CarrosselGruposRecomendados;
