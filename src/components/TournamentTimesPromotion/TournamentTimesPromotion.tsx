import "./TournamentTimesPromotion.scss";

import TimeWidget from "../TimeWidget/TimeWidget";

import CardsLeft from "./assets/cards-left.png";
import CardsRight from "./assets/cards-right.png";
import { getClickHandler } from "../../helpers/helper-functions";

// ------ COMPONENT: START ------ //

export default function TournamentTimesPromotion() {
  return (
    <div className="tournament-times-promotion">
      <p className="tournament-times-promotion__description">
        სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
      </p>

      <TimeWidget />

      <p className="tournament-times-promotion__hint">
        * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
      </p>
      <p className="tournament-times-promotion__hint">
        ტურნირის სრული განრიგის სანახავად გადადი პოკერის ლობიში
      </p>

      <button
        className="tournament-times-promotion__poker-lobby-btn"
        onClick={getClickHandler()}
      >
        პოკერის ლობი
      </button>

      <img
        className="tournament-times-promotion__cards-left"
        src={CardsLeft}
        alt="Image of cards."
      />
      <img
        className="tournament-times-promotion__cards-right"
        src={CardsRight}
        alt="Image of cards."
      />
    </div>
  );
}

// ------ COMPONENT: END ------ //
