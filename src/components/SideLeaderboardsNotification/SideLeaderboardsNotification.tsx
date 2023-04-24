import "./SideLeaderboardsNotification.scss";

import StageInfoContainer from "../StageInfoContainer/StageInfoContainer";

// ------ COMPONENT: START ------ //

export default function SideLeaderboardsNotification() {
  const headerTextContent = (
    <>
      <p className="side-leaderboards-notification__header">
        დამატებით შედგება ქეშგეიმის, ტურნირების და სპინ პოკერის 12 SIDE
        ლიდერბორდი
      </p>
      <p className="side-leaderboards-notification__hint">
        * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
      </p>
    </>
  );

  return (
    <StageInfoContainer
      additionalCSSClass="stage-info-container---side-leaderboards-notification-case"
      activateHeaderBlock={true}
      activateOrangeLine={true}
      activateContentBlock={false}
      headerText={headerTextContent}
    />
  );
}

// ------ COMPONENT: END ------ //
