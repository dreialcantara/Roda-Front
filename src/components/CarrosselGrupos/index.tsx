// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./index.css";
import "react-multi-carousel/lib/styles.css";
import CardGrupos from "../CardGrupos";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { ListarGrupos } from "../../services/MainApi/listargrupos";
import { useState, useEffect } from "react";

function CarrosselGrupos() {
  type gruposType = {
    name: string;
    books: string;
    idgroup ?: number;
    updated_at : string;
    
  };

  


  const user = useSelector((store: RootStore) => store);
  const [grupos, setGrupos] = useState(Array<gruposType>);

  useEffect(() => {
    const fetchData = async () => {
      const response = await ListarGrupos(user.token);

      setGrupos(response.data);

      
    };
    fetchData();
    console.log(grupos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="">
      <h1 className="h1home text-dark mt-5 mb-3">Seus Grupos</h1>
      {grupos.length > 0 ? (
        <Swiper 
        
          loop={true}
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
          {grupos.map((grupos) => (
            <SwiperSlide key={grupos.idgroup}>
              <CardGrupos
              updated_at={grupos.updated_at as string}
                name={grupos.name as string}
                books={grupos.books as string}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h1 className="w-100 h-100 text-center">Sem Gruposs</h1>
      )}
    </div>
  );
}
export default CarrosselGrupos;
