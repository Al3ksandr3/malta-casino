import "./HoldemListHeader.scss";

import ExclamationMarkIcon from "./assets/exclamation-mark-icon.png";

interface HoldemListHeaderProps {
  headerText: string;
}

// ------ COMPONENT: START ------ //

export default function HoldemListHeader(props: HoldemListHeaderProps) {
  return (
    <span className="holdem-list-header">
      <h4 className="holdem-list-header__header-text">{props.headerText}</h4>
      <img
        className="holdem-list-header__icon"
        src={ExclamationMarkIcon}
        alt="Exclamation mark icon by hovering/clicking which you can get more info about holdem TOP 20 leaderboard."
      />
    </span>
  );
}

// ------ COMPONENT: END ------ //
