import Header from "../Header";
import s from "./FirstScreen.module.scss";

function FirstScreen() {
  return (
    <div className="side-padding">
      <section className={s.fs}>
        <Header />
        <div className={s.container}>
          <p className={s.title}>Сайти, що втілюють ваші ідеї</p>
          <p className={s.subtitle}>
            Ми спеціалізуємося на розробці, що поєднує передові технології та
            експертизи
          </p>
        </div>
      </section>
    </div>
  );
}

export default FirstScreen;
