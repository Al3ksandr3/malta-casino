import "./RulesAndConditionsItem.scss";

import ArrowDownIcon from "./assets/arrow-down-icon.svg";

import { getClickHandler } from "../../helpers/helper-functions";

interface RulesAndConditionsItemProps {
  itemContent: string;
}

// ------ COMPONENT: START ------ //

export default function RulesAndConditionsItem(
  props: RulesAndConditionsItemProps
) {
  return (
    <li className="rules-and-conditions-item">
      <p className="rules-and-conditions-item__content">{props.itemContent}</p>
      <img
        className="rules-and-conditions-item__icon"
        src={ArrowDownIcon}
        alt="Arrow pointing down, representing the feature to expand the current list item in order to get an answer on the specified topic."
        onClick={getClickHandler()}
      />
    </li>
  );
}

// ------ COMPONENT: END ------ //
