import React from "react";
import SectionHeader from "../SectionHeader";
import CasesSlider from "./CasesSlider";

function Cases() {
  return (
    <div>
      <div className="side-padding">
        <SectionHeader
          id="cases"
          tag="кейси"
          title="Реалізовані ідеї наших клієнтів"
          text="Мрія створювати індивідуальні рішення, надаючи можливість реалізувати потенціал у цифровому світі, втілилась в наших кейсах. Ми віримо, що кожен бізнес унікальний, і допомагаємо розкрити це через вебсайти та онлайн-платформи. "
          titleMaxWidth={365}
          textMaxWidth={600}
        />
      </div>
      <CasesSlider />
    </div>
  );
}

export default Cases;
