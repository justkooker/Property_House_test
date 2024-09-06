import Logo from "../Logo";
import MediaSvgSprite from "../MediaSvgSprite";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer id="contacts" className={s.footer}>
      <div className={s.container}>
        <div className={s.name}>
          <Logo />
          <h2 className={s.slogan}>Комітимо мрії в реальність</h2>
        </div>
        <ul className={s.contactList}>
          <li className={s.contactItem}>
            <h3 className={s.contactItem__title}>Адреса</h3>
            <p className={s.contactItem__info}>Київ, Україна</p>
            <p className={s.contactItem__info}>
              ТЦ Мармелад, вул. Борщагівська
            </p>
            <p className={s.contactItem__info}>154, офіс / блок 4-5</p>
          </li>
          <li className={s.contactItem}>
            <h3 className={s.contactItem__title}>Телефони</h3>
            <p className={s.contactItem__info}>+38 098-001-39-39</p>
            <p className={s.contactItem__info}>+38 098-001-39-39</p>
            <p className={s.contactItem__info}>+38 098-001-39-39</p>
          </li>
          <li className={s.contactItem}>
            <h3 className={s.contactItem__title}>Месенджери</h3>
            <p className={s.contactItem__info}>Email: gmail</p>
            <p className={s.contactItem__info}>Telegram: sales</p>
            <p className={s.contactItem__info}>Viber: sales</p>
          </li>
        </ul>
      </div>
      <div className={s.other}>
        <p className={s.copyright}>
          Copyright © 2022 BRIX Templates | All Rights Reserved{" "}
        </p>
        <ul className={s.media}>
          <li className={s.media__item}>
            <a href="#">
              <MediaSvgSprite social="linkedin" width={19} height={19} />
            </a>
          </li>
          <li className={s.media__item}>
            <a href="#">
              <MediaSvgSprite social="instagram" width={19} height={19} />
            </a>
          </li>
          <li className={s.media__item}>
            <a href="#">
              <MediaSvgSprite social="fb" width={11} height={19} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
