import React from "react";
import sprite from '../../assets/image/svg/media-sprite.svg'
import s from "./MediaSvgSprite.module.scss";

const MediaSvgSprite = ({ social, width,height}) => (
  <svg className={s.svg} width={width} height={height}>
    <use xlinkHref={`${sprite}#${social}`} />
  </svg>
);

export default MediaSvgSprite;
