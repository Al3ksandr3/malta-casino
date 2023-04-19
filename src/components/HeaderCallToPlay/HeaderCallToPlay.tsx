import "./HeaderCallToPlay.scss";

import BrandLogo from "./assets/brand-logo.png";

import AccountButtons from "../AccountButtons/AccountButtons";
import SlotDates from "../SlotDates/SlotDates";

// ------ COMPONENT: START ------ //

export default function HeaderCallToPlay() {
  return (
    <aside className="header-call-to-play">
      <span className="header-call-to-play__left-container">
        <img
          className="header-call-to-play__left-container__brand-logo"
          src={BrandLogo}
          alt="Logo of the Europebet."
        />
        <SlotDates />
      </span>
      <span className="header-call-to-play__right-container">
        <AccountButtons />
      </span>
    </aside>
  );
}

// ------ COMPONENT: END ------ //
