import React from "react";
import "./Classes.css";
import CardClasses from "./CardClasses";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTranslation } from "react-i18next";
function Classes() {
  const [t, i18n] = useTranslation();
  return (
    <div className="classes">
      <div
        className={"container" + " " + (i18n.language == "ar" ? "arab" : " ")}
      >
        <div className="classes__title">
          <h1>{t("Take The Classes &amp; Start Learning From Today")}</h1>
        </div>
        <div className="classes__cards">
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
              <CardClasses />
            </SwiperSlide>
            <SwiperSlide>
              <CardClasses />
            </SwiperSlide>
            <SwiperSlide>
              <CardClasses />
            </SwiperSlide>
            <SwiperSlide>
              <CardClasses />
            </SwiperSlide>
            <SwiperSlide>
              <CardClasses />
            </SwiperSlide>
            <SwiperSlide>
              <CardClasses />
            </SwiperSlide>
            <SwiperSlide>
              <CardClasses />
            </SwiperSlide>
            <SwiperSlide>
              <CardClasses />
            </SwiperSlide>
          </Swiper>
        </div>
        {/*
        <div className="classes__buttons">
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

export default Classes;
