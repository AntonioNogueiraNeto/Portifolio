import React, { useContext } from "react";
import "./certificado.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ingles from "../../img/EFSET.png";
import trybe1 from "../../img/trybe.png";
import trybe2 from "../../img/trybe2.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}></span>
      <span>Certificados</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={ingles} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trybe1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trybe2} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Portfolio;
