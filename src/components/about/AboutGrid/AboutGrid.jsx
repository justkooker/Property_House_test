import React from "react";

import img_1 from "../../../assets/image/img/about-img1.webp";
import img_2 from "../../../assets/image/img/about-img2.webp";

import s from "./AboutGrid.module.scss";

function AboutGrid() {
  return (
    <div className={s.grid}>
      <div className={s.grid__el1}>
        <img src={img_1} alt="" />
      </div>
      <div className={s.grid__el2}>
        {/* <img src={img_2} alt="" /> */}
      </div>
      <div className={s.grid__el3}>
        <span>1250+</span>
        <p>виконаних проектів</p>
      </div>
      <div className={s.grid__el4}>
        <span>10mln+</span>
        <p>рядків коду</p>
      </div>
      <div className={s.grid__el5}>
        <span>99%</span>
        <p>задоволених клієнтів</p>
      </div>
      <div className={s.grid__el6}>
        <span>85%</span>
        <p>зростання бізнесу</p>
      </div>
    </div>
  );
}

export default AboutGrid;
