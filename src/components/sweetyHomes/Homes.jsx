import "./Homes.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../utils/slider.json";
import "swiper/css";
import { sliderSetting } from "../../utils/common";

const Homes = () => {
  return (
    <section className="home-wrapper">
      <div className="paddings innerWidth home-container">
        <div className="head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residences</span>
        </div>
        <Swiper {...sliderSetting} style={{ position: "static" }}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="card flexColStart">
                <img src={card.image} alt="home" />
                <span className="secondaryText price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Homes;

const SliderButtons = () => {
  const swipe = useSwiper();

  return (
    <div className="flexCenter s-buttons">
      <button onClick={() => swipe.slidePrev()}>&lt;</button>
      <button onClick={() => swipe.slideNext()}>&gt;</button>
    </div>
  );
};
