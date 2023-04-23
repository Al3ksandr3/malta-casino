import "./LeaderboardListItem.scss";

interface LeaderboardListItemProps {
  placeIndex: number;
  voucherAmount: string;
  prizeDescription: { description: string; prizeIcon: string } | string;
}

// ------ COMPONENT: START ------ //

export default function LeaderboardListItem(props: LeaderboardListItemProps) {
  return (
    <li className="leaderboard-list-item">
      <p className="leaderboard-list-item__place-index">{props.placeIndex}</p>
      <p className="leaderboard-list-item__voucher-amount">
        {props.voucherAmount}
      </p>

      {typeof props.prizeDescription === "string" ? (
        <p className="leaderboard-list-item__prize-description--p">
          {props.prizeDescription}
        </p>
      ) : (
        <span className="leaderboard-list-item__prize-description--span">
          <img
            className="leaderboard-list-item__prize-description--span__icon"
            src={props.prizeDescription.prizeIcon}
            alt="Icon representing prize for a particular place."
          />
          <p className="leaderboard-list-item__prize-description--span__text">
            {props.prizeDescription.description}
          </p>
        </span>
      )}
    </li>
  );
}

// ------ COMPONENT: END ------ //
