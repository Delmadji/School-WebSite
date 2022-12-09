import React from "react";
import "./Services.css";
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTranslation } from "react-i18next";

function Services() {
  const [t, i18n] = useTranslation();
  return (
    <div className="services">
      <div
        className={"container" + " " + (i18n.language == "ar" ? "arab" : " ")}
      >
        <div className="servicesTop">
          <div className="servicesTop__left">
            <h2>{t("Providin Good Qualities For Your Loving Kids")}</h2>
          </div>
          <div className="servicesTop__right">
            <p>
              {t(
                "Consequat interdum massa molestie varius facilisi lectus libero, morbi pretium. Volutpat cursus sollicit udin blandit posuere facilisi volutpat"
              )}
            </p>
          </div>
        </div>
        <div className="servicesBottom">
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
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Services;
