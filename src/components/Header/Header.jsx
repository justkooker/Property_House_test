import React, { useState } from "react";
import Menu from "../menu/Menu";
import Logo from "../Logo";
import ButtonOrder from "../ButtonOrder";

import s from "./Header.module.scss";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <header className={s.header}>
      <Menu active={active} setActive={setActive} />
      <div className={s.logo}>
        <Logo color={active ? "#171313" : ""} />
      </div>
      <ButtonOrder />
      <div className={s.square}></div>
    </header>
  );
}

export default Header;
