import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import AboutGrid from "./AboutGrid";

function About() {
  return (
    <div id="about" className="side-padding">
      <section>
        <SectionHeader
          id="abaut"
          tag="Про нас"
          title="Індивідуальний підхід та гнучкість для створення цифрових рішень"
          text="Наша команда працює над тим, щоб кожне рішення було максимально адаптивним, інтуїтивним і орієнтованим на вашого кінцевого користувача"
          titleMaxWidth={565}
          textMaxWidth={360}
        />
        <AboutGrid />
      </section>
    </div>
  );
}

export default About;
