import React from "react";
import BurgerBtn from "../BurgerBtn";
import MenuItem from "./MenuItem";

import s from "./Menu.module.scss";

function Menu({ active, setActive }) {
  return (
    <div className={s.container}>
      <ul className={s.menu} style={{top: active ? '0' : '-100%'}}>
        <MenuItem text="Про нас" anchor="about" />
        <MenuItem text="Кейси" anchor="cases" />
        <MenuItem text="Контакти" anchor="contacts" />
      </ul>
      <BurgerBtn active={active} setActive={setActive} />
    </div>
  );
}

export default Menu;
