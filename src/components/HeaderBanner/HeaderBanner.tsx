import "./HeaderBanner.scss";

import Banner from "./assets/banner.jpg";

import HeaderCallToPlay from "../HeaderCallToPlay/HeaderCallToPlay";

// ------ COMPONENT: START ------ //

export default function HeaderBanner() {
  return (
    <span className="header-banner">
      <img
        className="header-banner__image"
        src={Banner}
        alt="Banner for the tournament."
      />
      <HeaderCallToPlay />
    </span>
  );
}

// ------ COMPONENT: END ------ //
