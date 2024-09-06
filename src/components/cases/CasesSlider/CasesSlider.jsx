import React, { useEffect } from "react";

import Swiper from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import backgroundImg from "../../../assets/image/img/cases-bg.webp";
import backgroundImgMob from "../../../assets/image/img/cases-bg-mob.webp";
import s from "./CasesSlider.module.scss";
import "./casesSlider.scss";

const data = [
  {
    id: 1,
    background: backgroundImg,
    backgroundMob: backgroundImgMob,
    title: "250+ Корпоративних сайтів",
    cases: [
      "стартапи",
      "фінансові та юридичні послуги",
      "медичні послуги",
      "бізнес-конференції",
      "туристичні послуги",
      "сільськогосподарська продукція",
    ],
  },
  {
    id: 2,
    background: backgroundImg,
    backgroundMob: backgroundImgMob,
    title: "250+ Корпоративних сайтів",
    cases: [
      "стартапи",
      "фінансові та юридичні послуги",
      "медичні послуги",
      "бізнес-конференції",
      "туристичні послуги",
      "сільськогосподарська продукція",
    ],
  },
  {
    id: 3,
    background: backgroundImg,
    backgroundMob: backgroundImgMob,
    title: "250+ Корпоративних сайтів",
    cases: [
      "стартапи",
      "фінансові та юридичні послуги",
      "медичні послуги",
      "бізнес-конференції",
      "туристичні послуги",
      "сільськогосподарська продукція",
    ],
  },
];

function CasesSlider() {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Scrollbar],
      grabCursor: true,

      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: false,
      },
      slidesPerView: "auto",
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        800: {
          spaceBetween: 20,
        },
      },
    });
  }, []);

  return (
    <div id="cases" className={s.container}>
      <div className="swiper">
        <div className="swiper-wrapper">
          {data.map((slide) => (
            <div key={slide.id} className="swiper-slide">
              <div className={s.filter}></div>
              <picture>
                <source
                  className={s.background}
                  srcset={slide.background}
                  media="(min-width: 800px)"
                />
                <img className={s.background} src={slide.backgroundMob} />
              </picture>
              <div className={s.textContainer}>
                <h2 className={s.title}>{slide?.title}</h2>
                <ul className={s.cases}>
                  {slide?.cases.map((elem) => (
                    <li key={elem} className={s.cases__item}>
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          ))}
        </div>
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
}

export default CasesSlider;
