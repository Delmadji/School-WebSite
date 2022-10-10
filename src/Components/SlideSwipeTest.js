import React from "react";
import "./SlideSwipeTest.css";
import Image from "../assets/image/me.jpeg";
import CardTeacher from "./CardTeacher";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
function SlideSwipeTest() {
  return (
    <div className="slideSwipeTest">
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={3}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{ clickable: true }}
          modules={[FreeMode, Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              width: 320,
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },

            // when window width is >= 1000px
            1000: {
              width: 1000,
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardTeacher
              image={Image}
              name="Younes Delmadji"
              subject="English Teacher"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeacher
              image={Image}
              name="Younes Delmadji"
              subject="English Teacher"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeacher
              image={Image}
              name="Younes Delmadji"
              subject="English Teacher"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeacher
              image={Image}
              name="Younes Delmadji"
              subject="English Teacher"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeacher
              image={Image}
              name="Younes Delmadji"
              subject="English Teacher"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeacher
              image={Image}
              name="Younes Delmadji"
              subject="English Teacher"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeacher
              image={Image}
              name="Younes Delmadji"
              subject="English Teacher"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeacher
              image={Image}
              name="Younes Delmadji"
              subject="English Teacher"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTeacher
              image={Image}
              name="Younes Delmadji"
              subject="English Teacher"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SlideSwipeTest;
