import React from "react";
import CardTeacher from "./CardTeacher";
import "./TeacherSection.css";
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

function TeacherSection() {
  const [t, i18n] = useTranslation();
  return (
    <div className="teacherSection">
      <div
        className={"container" + " " + (i18n.language == "ar" ? "arab" : " ")}
      >
        <div className="teacherSection__top">
          <h2>{t("Take The Course &amp; Start Learning From Today")}</h2>
          <p>
            {t(
              "Consequat interdum massa molestie varius facilisi lectus libero, morbi pretium. Volutpat cursus sollicit udin blandit posuere facilisi volutpat"
            )}
          </p>
        </div>
        <div className="teacherSection__card">
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
                name={t("Younes Delmadji")}
                subject={t("English Teacher")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeacher
                image={teachOne}
                name={t("Sajiya Maamcha")}
                subject={t("Mathematics Teacher")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeacher
                image={teachTow}
                name={t("Alkhitos")}
                subject={t("French Teacher")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeacher
                image={teachThree}
                name={t("Gringo")}
                subject={t("Sciences Teacher")}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TeacherSection;
