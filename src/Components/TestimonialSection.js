import React from "react";
import CardStudents from "./CardStudents";
import "./TestimonialSection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "../assets/image/me.jpeg";
import teachOne from "../assets/image/teacher-1.png";
import teachTow from "../assets/image/teacher-2.png";
import teachThree from "../assets/image/teacher-3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTranslation } from "react-i18next";

function TestimonialSection() {
  const [t, i18n] = useTranslation();
  return (
    <div className="testimonialSection">
      <div className="container">
        <div className="title">
          <h1>{t("What our students say")}</h1>
        </div>
        <div className="cards">
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
              <CardStudents image={Image} name={t("Younes Delmadji")} />
            </SwiperSlide>
            <SwiperSlide>
              <CardStudents image={teachOne} name={t("Younes Delmadji")} />
            </SwiperSlide>
            <SwiperSlide>
              <CardStudents image={teachTow} name={t("Younes Delmadji")} />
            </SwiperSlide>
            <SwiperSlide>
              <CardStudents image={teachThree} name={t("Younes Delmadji")} />
            </SwiperSlide>
          </Swiper>
        </div>
        {/*
        <div className="buttons">
          <button className="back">
            <ArrowBackIcon />
          </button>
          <button className="next active">
            <ArrowForwardIcon />
          </button>
        </div>
         */}
      </div>
    </div>
  );
}

export default TestimonialSection;
