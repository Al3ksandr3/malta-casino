import "./MysteriousKeysList.scss";

import GreyContainer from "../GreyContainer/GreyContainer";
import MysteriousKeysListItem from "../MysteriousKeysListItem/MysteriousKeysListItem";

import { mysteriousKeysList } from "./mock-data";

// ------ COMPONENT: START ------ //

export default function MysteriousKeysList() {
  return (
    <GreyContainer additionalCSSClass="grey-container---mysterious-keys-list-case">
      <ul>
        {mysteriousKeysList.map((mysteriousKeys) => (
          <MysteriousKeysListItem
            key={mysteriousKeys.placeIndex}
            placeIndex={mysteriousKeys.placeIndex}
            keyDescription={mysteriousKeys.keyDescription}
          />
        ))}
      </ul>
    </GreyContainer>
  );
}

// ------ COMPONENT: END ------ //
