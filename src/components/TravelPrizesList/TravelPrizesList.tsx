import "./TravelPrizesList.scss";

import TravelPrizeCard from "../TravelPrizeCard/TravelPrizeCard";

import { travelPrizesListOne, travelPrizesListTwo } from "./mock-data";

// ------ COMPONENT: START ------ //

export default function TravelPrizesList() {
  return (
    <div className="travel-prizes-list">
      <ul className="travel-prizes-list__left-list">
        {travelPrizesListOne.map((travelPrize) => (
          <TravelPrizeCard
            key={travelPrize.cardTitle}
            {...travelPrize}
            additionalCSSClass="travel-prize-card--type-one"
          />
        ))}
      </ul>

      <ul className="travel-prizes-list__right-list">
        {travelPrizesListTwo.map((travelPrize) => (
          <TravelPrizeCard
            key={travelPrize.cardTitle}
            {...travelPrize}
            additionalCSSClass="travel-prize-card--type-two"
          />
        ))}
      </ul>
    </div>
  );
}

// ------ COMPONENT: END ------ //
