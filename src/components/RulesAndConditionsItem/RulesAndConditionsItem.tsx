import "./RulesAndConditionsItem.scss";

import { getClickHandler } from "../../helpers/helper-functions";

import ArrowDownIcon from "./assets/arrow-down-icon.svg";

interface RulesAndConditionsItemProps {
  children: string;
}

// ------ COMPONENT: START ------ //

export default function RulesAndConditionsItem(
  props: RulesAndConditionsItemProps
) {
  return (
    <li className="rules-and-conditions-item">
      <p className="rules-and-conditions-item__content">{props.children}</p>
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
