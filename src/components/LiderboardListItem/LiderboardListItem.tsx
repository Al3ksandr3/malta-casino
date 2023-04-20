import "./LiderboardListItem.scss";

import React from "react";

interface LiderboardListItemProps {
  placeIndex: string;
  voucherAmount: string;
  prize: React.ReactNode;
}

// ------ COMPONENT: START ------ //

export default function LiderboardListItem(props: LiderboardListItemProps) {
  return (
    <li className="liderboard-list-item">
      <p className="liderboard-list-item__place-index">{props.placeIndex}</p>
      <p className="liderboard-list-item__voucher-amount">{props.placeIndex}</p>
      {typeof props.prize === "string" ? (
        <p className="liderboard-list-item__prize"></p>
      ) : (
        props.prize
      )}
    </li>
  );
}

// ------ COMPONENT: END ------ //
