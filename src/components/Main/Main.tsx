import "./Main.scss";

import { useState } from "react";

import StagesList from "../StagesList/StagesList";

import CashGamesStage from "../stages/CashGamesStage/CashGamesStage";
import SpringSeriesStage from "../stages/SpringSeriesStage/SpringSeriesStage";
import FinalStage from "../stages/FinalStage/FinalStage";

import RulesAndConditionsSection from "../RulesAndConditionsSection/RulesAndConditionsSection";
import SimilarPromotionsSection from "../SimilarPromotionsSection/SimilarPromotionsSection";

// ------ COMPONENT: START ------ //

export default function Main() {
  const [indexOfSelectedStage, setIndexOfSelectedStage] = useState(0);

  function clickHandler(clickE: React.PointerEvent<HTMLUListElement>) {
    const clickedStage = (clickE.target as HTMLElement).closest(
      ".stages-list-item"
    );

    if (!clickedStage) return;

    const indexOfClickedStage: string = (clickedStage as HTMLElement).dataset
      .stageIndex as string;

    setIndexOfSelectedStage(Number(indexOfClickedStage));
  }

  return (
    <main className="main">
      <StagesList
        clickHandler={clickHandler}
        indexOfSelectedStage={indexOfSelectedStage}
      />
      {indexOfSelectedStage === 0 && <CashGamesStage />}
      {indexOfSelectedStage === 1 && <SpringSeriesStage />}
      {indexOfSelectedStage === 2 && <FinalStage />}
      <RulesAndConditionsSection />
      <SimilarPromotionsSection />
    </main>
  );
}

// ------ COMPONENT: END ------ //
