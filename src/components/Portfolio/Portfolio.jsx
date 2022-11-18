import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Churrascometro from "../../img/churrascometro.png";
import Trivia from "../../img/trivia.png";
import studio from "../../img/studioGhibi.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://antonionogueiraneto.github.io/Churrascometro/">

          <img src={Churrascometro} alt="" />

          </a>
        </SwiperSlide>

        <SwiperSlide>

        <a href="//www.https://trivia-pink-ten.vercel.app/.com">

          <img src={Trivia} alt="" />
        </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://ghibli-animations.vercel.app/">

          <img src={studio} alt="" />

          </a>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Portfolio;
