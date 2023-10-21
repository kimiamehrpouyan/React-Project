import React, { useEffect, useState } from "react";
import TestimonialsCss from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const [carousalData, setCarousalData] = useState();
  useEffect(() => {
    fetch("http://localhost:3001/TestimonialsData")
      .then((res) => res.json())
      .then((data) => setCarousalData(data));
  }, []);
  return (
    <>
      <div className={TestimonialsCss.container}>
        <div className={TestimonialsCss.leftSide}>
          <span>top rated</span>
          <span>
            seedily say has suitable disposal and boy. exercise joy man children
            rejoiced
          </span>
        </div>
        <img src="assets/testimonialHero.png" alt="Testimonials" />
        <div className={TestimonialsCss.rightSide}>
          <span>100K</span>
          <span>Happy customers with us</span>
        </div>
      </div>

      <div className={TestimonialsCss.reviews}>Reviews</div>

      <div className={TestimonialsCss.carousal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={30}
          className={TestimonialsCss.swiper}
        >
          {carousalData?.map((e, index) => (
            <SwiperSlide key={index}>
              <div className={TestimonialsCss.testimonial}>
                <img src={e.image} alt="testimonial" />
                <span className={TestimonialsCss.comment}>{e.comment}</span>
                <hr />
                <span className={TestimonialsCss.name}>{e.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
