import "./CashGamesStage.scss";

import ExclamationMarkIcon from "./assets/exclamation-mark-icon.png";

import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";
import GreyContainer from "../../GreyContainer/GreyContainer";

// ------ COMPONENT: START ------ //

export default function CashGamesStage() {
  return (
    <section className="cash-games-stage">
      <StageInfoContainer headerText="1 ₾ რეიკი = 1 ქულას">
        <>
          <span className="cash-games-stage__top20-leaderboard">
            <h4 className="cash-games-stage__top20-leaderboard__header">
              ჰოლდემის TOP 20 ლიდერბორდი
            </h4>
            <img
              className="cash-games-stage__top20-leaderboard__icon"
              src={ExclamationMarkIcon}
              alt="Exclamation mark icon by hovering/clicking which you can get more info about holdem TOP 20 leaderboard."
            />
          </span>
          <span className="cash-games-stage__top20-leaderboard">
            <h4 className="cash-games-stage__top20-leaderboard__header">
              TOP 20 ლიდერბორდი ჰოლდემში
            </h4>
            <img
              className="cash-games-stage__top20-leaderboard__icon"
              src={ExclamationMarkIcon}
              alt="Exclamation mark icon by hovering/clicking which you can get more info about holdem TOP 20 leaderboard."
            />
          </span>
        </>
      </StageInfoContainer>
    </section>
  );
}

// ------ COMPONENT: END ------ //
