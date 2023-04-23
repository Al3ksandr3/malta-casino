import "./PrizesWithOrangeLineList.scss";

import GreyContainer from "../GreyContainer/GreyContainer";
import PrizeDescriptionItemWithOrangeLine from "../PrizeDescriptionItemWithOrangeLine/PrizeDescriptionItemWithOrangeLine";

import { prizesWithOrangeLineList } from "./mock-data";

// ------ COMPONENT: START ------ //

export default function PrizesWithOrangeLineList() {
  return (
    <GreyContainer additionalCSSClass="grey-container---prizes-with-orange-line-list-case">
      <ul>
        {prizesWithOrangeLineList.map((prizeWithOrangeLine) => (
          <PrizeDescriptionItemWithOrangeLine
            key={
              prizeWithOrangeLine.prizeDescription +
              prizeWithOrangeLine.prizeImage
            }
            prizeDescription={prizeWithOrangeLine.prizeDescription}
            prizeImage={prizeWithOrangeLine.prizeImage}
          />
        ))}
      </ul>
    </GreyContainer>
  );
}

// ------ COMPONENT: END ------ //
