import "./CashGamesStage.scss";

import HoldemListHeader from "../../HoldemListHeader/HoldemListHeader";
import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";
import LeaderboardList from "../../LeaderboardList/LeaderboardList";
import PrizesWithOrangeLineList from "../../PrizesWithOrangeLineList/PrizesWithOrangeLineList";
import SideLeaderboardsNotification from "../../SideLeaderboardsNotification/SideLeaderboardsNotification";

// ------ COMPONENT: START ------ //

export default function CashGamesStage() {
  return (
    <>
      <section className="cash-games-stage">
        <StageInfoContainer
          activateHeaderBlock={true}
          activateOrangeLine={true}
          activateContentBlock={true}
          headerText="1 ₾ რეიკი = 1 ქულას"
          additionalCSSClass="stage-info-container---cash-games-stage-case"
        >
          <>
            <HoldemListHeader headerText="ჰოლდემის TOP 20 ლიდერბორდი" />

            <LeaderboardList />

            <PrizesWithOrangeLineList />

            <HoldemListHeader headerText="TOP 20 ლიდერბორდი ჰოლდემში" />

            <LeaderboardList />

            <PrizesWithOrangeLineList />

            <p className="cash-games-stage___footnote">
              * ლიდერბორდის შედეგები განახლება{" "}
              <a className="cash-games-stage___footnote__link" href="#">
                პოკერის ლობიში
              </a>
            </p>
          </>
        </StageInfoContainer>
      </section>

      <SideLeaderboardsNotification />
    </>
  );
}

// ------ COMPONENT: END ------ //
