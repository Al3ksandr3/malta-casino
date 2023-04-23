import "./PrizesWithOrangeLineList.scss";

import GreyContainer from "../GreyContainer/GreyContainer";
import PrizeDescriptionItemWithOrangeLine from "../PrizeDescriptionItemWithOrangeLine/PrizeDescriptionItemWithOrangeLine";

import { prizesWithOrangeLineList } from "./mock-data";

interface PrizesWithOrangeLineListProps {
  additionalCSSClassForGreyContainer?: string;
}

// ------ COMPONENT: START ------ //

export default function PrizesWithOrangeLineList(
  props: PrizesWithOrangeLineListProps
) {
  return (
    <GreyContainer
      additionalCSSClass={
        props.additionalCSSClassForGreyContainer
          ? `grey-container---prizes-with-orange-line-list-case--${props.additionalCSSClassForGreyContainer}`
          : "grey-container---prizes-with-orange-line-list-case"
      }
    >
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
