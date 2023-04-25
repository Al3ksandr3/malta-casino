import "./CallToPlay.scss";

import { getClickHandler } from "../../helpers/helper-functions";

// ------ COMPONENT: START ------ //

export default function CallToPlay() {
  return (
    <aside className="call-to-play">
      <button className="call-to-play__button" onClick={getClickHandler()}>
        ითამაშე
      </button>
    </aside>
  );
}

// ------ COMPONENT: END ------ //
