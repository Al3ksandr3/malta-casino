import "./TravelPack.scss";

import StageInfoContainer from "../StageInfoContainer/StageInfoContainer";
import TravelPackItem from "../TravelPackItem/TravelPackItem";

interface TravelPackProps {
  travelPackHeader: string;
  travelPackItems: {
    travelPackItemIcon: string;
    travelPackItemDescription: string;
    additionalCSSClass?: string;
  }[];
}

// ------ COMPONENT: START ------ //

export default function TravelPack(props: TravelPackProps) {
  return (
    <StageInfoContainer
      activateHeaderBlock={true}
      activateOrangeLine={true}
      activateContentBlock={true}
      additionalCSSClass="stage-info-container---travel-pack-case"
      headerText={props.travelPackHeader}
    >
      <ul className="travel-pack___items-list">
        {props.travelPackItems.map((travelPackItem) => (
          <TravelPackItem
            key={travelPackItem.travelPackItemDescription}
            additionalCSSClass={travelPackItem.additionalCSSClass}
            travelPackItemIcon={travelPackItem.travelPackItemIcon}
            travelPackItemDescription={travelPackItem.travelPackItemDescription}
          />
        ))}
      </ul>
    </StageInfoContainer>
  );
}

// ------ COMPONENT: END ------ //
