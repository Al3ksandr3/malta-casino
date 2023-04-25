import "./CoinsCollectionMechanics.scss";

import ArrowDownIcon from "./assets/arrow-down-icon.svg";

import { getClickHandler } from "../../helpers/helper-functions";

// ------ COMPONENT: START ------ //

export default function CoinsCollectionMechanics() {
  return (
    <span className="coins-collection-mechanics">
      <p className="coins-collection-mechanics__text">
        ქულების დაგროვების მექანიკა
      </p>
      <span className="coins-collection-mechanics__arrow-icon">
        <img
          src={ArrowDownIcon}
          alt="Arrow icon pointing down."
          onClick={getClickHandler()}
        />
      </span>
    </span>
  );
}

// ------ COMPONENT: END ------ //
