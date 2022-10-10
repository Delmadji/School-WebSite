import React from "react";
import "./Blog.css";
import CardBlogs from "./CardBlogs";
import ImageOne from "../assets/image/Image-1.png";
import ImageTow from "../assets/image/Image-2.png";
import ImageThree from "../assets/image/Image-3.png";
import Imagefour from "../assets/image/Image-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTranslation } from "react-i18next";

function Blog() {
  const [t, i18n] = useTranslation();
  return (
    <div className="blog">
      <div
        className={"container" + " " + (i18n.language == "ar" ? "arab" : " ")}
      >
        <h1>{t("Latest Blog &amp; Articles")}</h1>
        <div className="blogCards">
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
              <CardBlogs
                image={ImageOne}
                name="By : Lexus Dip"
                date="20 Jan 2022"
                desc={t(
                  `Back to school. cute little school girls sitting on bench`
                )}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardBlogs
                image={ImageTow}
                name="By : Lexus Dip"
                date="20 Jan 2022"
                desc={t(
                  `Back to school. cute little school girls sitting on bench`
                )}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardBlogs
                image={ImageThree}
                name="By : Lexus Dip"
                date="20 Jan 2022"
                desc={t(
                  `Back to school. cute little school girls sitting on bench`
                )}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardBlogs
                image={Imagefour}
                name="By : Lexus Dip"
                date="20 Jan 2022"
                desc={t(
                  `Back to school. cute little school girls sitting on bench`
                )}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardBlogs
                image={Imagefour}
                name="By : Lexus Dip"
                date="20 Jan 2022"
                desc={t(
                  `Back to school. cute little school girls sitting on bench`
                )}
              />
            </SwiperSlide>
          </Swiper>

          {/*   */}
        </div>
      </div>
    </div>
  );
}

export default Blog;
