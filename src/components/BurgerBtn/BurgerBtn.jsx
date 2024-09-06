import OpenMenu from "../../assets/image/svg/open-burger.svg?react";
import CloseMenu from "../../assets/image/svg/close-burger.svg?react";

import s from "./BurgerBtn.module.scss";

function BurgerBtn({ active, setActive }) {
  return (
    <button
      onClick={() => setActive(!active)}
      type="button"
      className={s.button}
    >
      {active ? <OpenMenu /> : <CloseMenu />}
    </button>
  );
}

export default BurgerBtn;
