import "./Header.scss";

import HeaderBanner from "../HeaderBanner/HeaderBanner";
import TournamentAnnouncement from "../TournamentAnnouncement/TournamentAnnouncement";

// ------ COMPONENT: START ------ //

export default function Header() {
  return (
    <header className="header">
      <HeaderBanner />
      <TournamentAnnouncement />
    </header>
  );
}

// ------ COMPONENT: END ------ //
