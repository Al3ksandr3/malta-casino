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
        >
          <div></div>
        </StageInfoContainer>

        <StageInfoContainer
          activateHeaderBlock={true}
          activateOrangeLine={true}
          activateContentBlock={true}
          additionalCSSClass="stage-info-container---spring-series-stage-case--two"
        >
          <div></div>
        </StageInfoContainer>

        <StageInfoContainer
          activateHeaderBlock={false}
          activateOrangeLine={false}
          activateContentBlock={true}
          additionalCSSClass="stage-info-container---spring-series-stage-case--three"
        >
          <div></div>
        </StageInfoContainer>
      </section>
      <SideLeaderboardsNotification />
    </>
  );
}

// ------ COMPONENT: END ------ //
