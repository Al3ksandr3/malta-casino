import "./LeaderboardHeaderRow.scss";

import EnvelopeMiniIcon from "./assets/envelope-mini-icon.png";

// ------ COMPONENT: START ------ //

export default function LeaderboardHeaderRow() {
  return (
    <div className="leaderboard-header-row">
      <p className="leaderboard-header-row__place">ადგილი</p>
      <span className="leaderboard-header-row__voucher">
        <img
          className="leaderboard-header-row__voucher__icon"
          src={EnvelopeMiniIcon}
          alt="Mini icon of envelope, that in the current case represents some prize."
        />
        <p>ვაუჩერი</p>
      </span>
      <p className="leaderboard-header-row__prize">პრიზი</p>
    </div>
  );
}

// ------ COMPONENT: END ------ //
