import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/hash-navigation";
import "./style.css";
import Card from "../../Components/Card";

export default function Slider() {
  const [sliderProducts, setSliderProducts] = useState();
  useEffect(() => {
    fetch("http://localhost:3001/sliderProducts")
      .then((res) => res.json())
      .then((data) => setSliderProducts(data));
  }, []);
  return (
    <>
      <div className={"container"}>
        <Swiper
          modules={[Navigation]}
          className={"mySwiper swiper"}
          navigation={true}
          loop={true}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={40}
        >
          {sliderProducts?.map((e, index) => (
            <SwiperSlide className={"swiperSlide"} key={index}>
              <Card
                name={e.name}
                detail={e.detail}
                price={e.price}
                img={e.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
