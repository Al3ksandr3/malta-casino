import "./LeaderboardList.scss";

import GreyContainer from "../GreyContainer/GreyContainer";
import LeaderboardHeaderRow from "../LeaderboardHeaderRow/LeaderboardHeaderRow";
import LeaderboardListItem from "../LeaderboardListItem/LeaderboardListItem";

import { leaderboardPrizesList } from "./mock-data";

// ------ COMPONENT: START ------ //

export default function LeaderboardList() {
  return (
    <GreyContainer additionalCSSClass="grey-container---leaderboard-list-case">
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
