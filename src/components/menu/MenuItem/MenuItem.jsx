import React from "react";
import s from "./MenuItem.module.scss";
function MenuItem({ text, anchor }) {
  return (
    <li className={s.menuItem}>
      <a className={s.menuItem__link} href={`#${anchor}`}>
        {text}
      </a>
    </li>
  );
}

export default MenuItem;
