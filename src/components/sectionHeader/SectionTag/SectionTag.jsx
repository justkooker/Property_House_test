import React from "react";
import Chevron from "../../../assets/image/svg/chevron-red.svg?react";

import s from './SectionTag.module.scss';

function SectionTag({ tag, id }) {
  return (
    <div className={s.container}>
      <Chevron  />
      <p className={s.text} id={id}>{tag}</p>
    </div>
  );
}

export default SectionTag;
