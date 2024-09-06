import React from "react";
import SectionTag from "./SectionTag";

import s from "./SectionHeader.module.scss";

function SectionHeader({ id, tag, title, text,titleMaxWidth = 'auto',textMaxWidth = 'auto' }) {
  return (
    <div className={s.container}>
      <SectionTag tag={tag} id={id} />
      <h2 className={s.title} style={{maxWidth: `${titleMaxWidth}px`}}>{title}</h2>
      <p className={s.text}  style={{maxWidth: `${textMaxWidth}px`}}>{text}</p>
    </div>
  );
}

export default SectionHeader;
