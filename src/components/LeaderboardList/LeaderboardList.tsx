import "./LeaderboardList.scss";

import GreyContainer from "../GreyContainer/GreyContainer";
import LeaderboardHeaderRow from "../LeaderboardHeaderRow/LeaderboardHeaderRow";
import LeaderboardListItem from "../LeaderboardListItem/LeaderboardListItem";

import { leaderboardPrizesList } from "./mock-data";

interface LeaderboardListProps {
  additionalCSSClassForGreyContainer?: string;
}

// ------ COMPONENT: START ------ //

export default function LeaderboardList(props: LeaderboardListProps) {
  return (
    <GreyContainer
      additionalCSSClass={
        props.additionalCSSClassForGreyContainer
          ? `grey-container---leaderboard-list-case--${props.additionalCSSClassForGreyContainer}`
          : "grey-container---leaderboard-list-case"
      }
    >
      <>
        <LeaderboardHeaderRow />
        <ul>
          {leaderboardPrizesList.map((leaderboardPrize) => (
            <LeaderboardListItem
              key={leaderboardPrize.placeIndex}
              placeIndex={leaderboardPrize.placeIndex}
              voucherAmount={leaderboardPrize.voucherAmount}
              prizeDescription={leaderboardPrize.prizeDescription}
            />
          ))}
        </ul>
      </>
    </GreyContainer>
  );
}

// ------ COMPONENT: END ------ //
