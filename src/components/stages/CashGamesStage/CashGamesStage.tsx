import "./CashGamesStage.scss";

import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";
import HoldemListHeader from "../../HoldemListHeader/HoldemListHeader";
import GreyContainer from "../../GreyContainer/GreyContainer";

// ------ COMPONENT: START ------ //

export default function CashGamesStage() {
  return (
    <section className="cash-games-stage">
      <StageInfoContainer
        headerText="1 ₾ რეიკი = 1 ქულას"
        additionalCSSClass="stage-info-container---cash-games-stage-case"
      >
        <>
          <HoldemListHeader headerText="ჰოლდემის TOP 20 ლიდერბორდი" />
          <GreyContainer
            additionalCSSClass="grey-container---cash-games-stage-case--one"
            children=""
          />
          <GreyContainer
            additionalCSSClass="grey-container---cash-games-stage-case--two"
            children=""
          />
          <HoldemListHeader headerText="TOP 20 ლიდერბორდი ჰოლდემში" />
          <GreyContainer
            additionalCSSClass="grey-container---cash-games-stage-case--three"
            children=""
          />
          <GreyContainer
            additionalCSSClass="grey-container---cash-games-stage-case--four"
            children=""
          />
          <p className="cash-games-stage__footer-note">
            * ლიდერბორდის შედეგები განახლება{" "}
            <a className="cash-games-stage__footer-note__link" href="#">
              პოკერის ლობიში
            </a>
          </p>
        </>
      </StageInfoContainer>
    </section>
  );
}

// ------ COMPONENT: END ------ //
