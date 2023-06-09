import "./SpringSeriesStage.scss";

import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";
import SideLeaderboardsNotification from "../../SideLeaderboardsNotification/SideLeaderboardsNotification";

import TournamentTimesPromotion from "../../TournamentTimesPromotion/TournamentTimesPromotion";

import CoinsCollectionMechanics from "../../CoinsCollectionMechanics/CoinsCollectionMechanics";

import LeaderboardList from "../../LeaderboardList/LeaderboardList";
import PrizesWithOrangeLineList from "../../PrizesWithOrangeLineList/PrizesWithOrangeLineList";

import DailyTournamentsPromotion from "../../DailyTournamentsPromotion/DailyTournamentsPromotion";

// ------ COMPONENT: START ------ //

export default function SpringSeriesStage() {
  return (
    <>
      <section className="spring-series-stage">
        {/* Container I */}

        <StageInfoContainer
          activateHeaderBlock={true}
          activateOrangeLine={true}
          activateContentBlock={true}
          additionalCSSClass="stage-info-container---spring-series-stage-case--one"
          headerText="ტურნირები და სატელიტები"
        >
          <TournamentTimesPromotion />
        </StageInfoContainer>

        {/* Container II */}

        <StageInfoContainer
          activateHeaderBlock={true}
          activateOrangeLine={true}
          activateContentBlock={true}
          additionalCSSClass="stage-info-container---spring-series-stage-case--two"
          headerText="მოხვდი TOP20 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით"
        >
          <>
            <span className="spring-series-stage___coins-collection-mechanics-placeholder">
              <CoinsCollectionMechanics />
            </span>
            <LeaderboardList additionalCSSClassForGreyContainer="spring-series-stage" />
            <PrizesWithOrangeLineList additionalCSSClassForGreyContainer="spring-series-stage" />
            <p className="spring-series-stage___footnote">
              * ლიდერბორდის შედეგები განახლება{" "}
              <a className="spring-series-stage___footnote__link" href="#">
                პოკერის ლობიში
              </a>
            </p>
            <p className="spring-series-stage___footnote">
              * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები
              და სატელიტები
            </p>
          </>
        </StageInfoContainer>

        {/* Container III */}

        <StageInfoContainer
          activateHeaderBlock={false}
          activateOrangeLine={false}
          activateContentBlock={true}
          additionalCSSClass="stage-info-container---spring-series-stage-case--three"
        >
          <DailyTournamentsPromotion />
        </StageInfoContainer>
      </section>
      <SideLeaderboardsNotification />
    </>
  );
}

// ------ COMPONENT: END ------ //
