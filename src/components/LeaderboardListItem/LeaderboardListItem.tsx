import "./LeaderboardListItem.scss";

import React from "react";

interface LeaderboardListItemProps {
  placeIndex: string;
  voucherAmount: string;
  prize: React.ReactNode;
}

// ------ COMPONENT: START ------ //

export default function LeaderboardListItem(props: LeaderboardListItemProps) {
  return (
    <li className="leaderboard-list-item">
      <p className="leaderboard-list-item__place-index">{props.placeIndex}</p>
      <p className="leaderboard-list-item__voucher-amount">
        {props.placeIndex}
      </p>
      {typeof props.prize === "string" ? (
        <p className="leaderboard-list-item__prize"></p>
      ) : (
        props.prize
      )}
    </li>
  );
}

// ------ COMPONENT: END ------ //
