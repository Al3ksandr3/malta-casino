import "./SpringSeriesStage.scss";

import SideLeaderboardsNotification from "../../SideLeaderboardsNotification/SideLeaderboardsNotification";
import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";

// ------ COMPONENT: START ------ //

export default function SpringSeriesStage() {
  return (
    <>
      <section className="spring-series-stage">
        <StageInfoContainer
          activateHeaderBlock={true}
          activateOrangeLine={true}
          activateContentBlock={true}
          additionalCSSClass="stage-info-container---spring-series-stage-case--one"
          headerText="ტურნირები და სატელიტები"
        >
          <div></div>
        </StageInfoContainer>

        <StageInfoContainer
          activateHeaderBlock={true}
          activateOrangeLine={true}
          activateContentBlock={true}
          additionalCSSClass="stage-info-container---spring-series-stage-case--two"
          headerText="მოხვდი TOP20 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით"
        >
          <div></div>
        </StageInfoContainer>

        <StageInfoContainer
          activateHeaderBlock={false}
          activateOrangeLine={false}
          activateContentBlock={true}
          additionalCSSClass="stage-info-container---spring-series-stage-case--three"
        >
          <>
            <h3 className="spring-series-stage___daily-tournament-banners-section__header"></h3>

            <p className="spring-series-stage___daily-tournament-banners-section__footnote"></p>
          </>
        </StageInfoContainer>
      </section>
      <SideLeaderboardsNotification />
    </>
  );
}

// ------ COMPONENT: END ------ //
