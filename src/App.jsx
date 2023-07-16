import DividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import DividerMobile from "./assets/images/pattern-divider-mobile.svg";
import { useState } from "react";
import AdviceService from "./services/AdviceService";
import { Card, DiceButton, Attribution } from "./components";

export default function App() {
  const [advice, setAdvice] = useState({
    id: 117,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  const getNewAdvice = async () => {
    const response = await AdviceService.getNew();
    setAdvice(response.data.slip);
  };

  return (
    <>
      <main>
        <Card>
          <h1 className="sr-only">Advice Generator App</h1>
          <h2 className="advice-number">Advice #{advice.id}</h2>
          <p className="advice-text">{advice.advice}</p>
          <picture className="divider">
            <source media="(min-width: 30em)" srcSet={DividerDesktop} />
            <img className="divider__img" src={DividerMobile} alt="" />
          </picture>
          <DiceButton onClick={getNewAdvice} />
        </Card>
      </main>
      <Attribution />
    </>
  );
}
