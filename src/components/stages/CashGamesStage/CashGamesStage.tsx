import "./CashGamesStage.scss";

import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";
import HoldemListHeader from "../../HoldemListHeader/HoldemListHeader";
import GreyContainer from "../../GreyContainer/GreyContainer";
import LeaderboardHeaderRow from "../../LeaderboardHeaderRow/LeaderboardHeaderRow";
import LeaderboardListItem from "../../LeaderboardListItem/LeaderboardListItem";
import PrizeDescriptionItemWithOrangeLine from "../../PrizeDescriptionItemWithOrangeLine/PrizeDescriptionItemWithOrangeLine";
import SideLeaderboardsNotification from "../../SideLeaderboardsNotification/SideLeaderboardsNotification";

import { leaderboardPrizesList, prizesWithOrangeLineList } from "./mock-data";

// ------ COMPONENT: START ------ //

export default function CashGamesStage() {
  return (
    <>
      <section className="cash-games-stage">
        <StageInfoContainer
          activateHeaderBlock={true}
          activateOrangeLine={true}
          activateContentBlock={true}
          headerText="1 ₾ რეიკი = 1 ქულას"
          additionalCSSClass="stage-info-container---cash-games-stage-case"
        >
          <>
            <HoldemListHeader headerText="ჰოლდემის TOP 20 ლიდერბორდი" />

            <GreyContainer additionalCSSClass="grey-container---cash-games-stage-case--type-one">
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

            <GreyContainer additionalCSSClass="grey-container---cash-games-stage-case--type-two">
              <ul>
                {prizesWithOrangeLineList.map((prizeWithOrangeLine) => (
                  <PrizeDescriptionItemWithOrangeLine
                    key={
                      prizeWithOrangeLine.prizeDescription +
                      prizeWithOrangeLine.prizeImage
                    }
                    prizeDescription={prizeWithOrangeLine.prizeDescription}
                    prizeImage={prizeWithOrangeLine.prizeImage}
                  />
                ))}
              </ul>
            </GreyContainer>

            <HoldemListHeader headerText="TOP 20 ლიდერბორდი ჰოლდემში" />

            <GreyContainer additionalCSSClass="grey-container---cash-games-stage-case--type-one">
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

            <GreyContainer additionalCSSClass="grey-container---cash-games-stage-case--type-two">
              <ul>
                {prizesWithOrangeLineList.map((prizeWithOrangeLine) => (
                  <PrizeDescriptionItemWithOrangeLine
                    key={
                      prizeWithOrangeLine.prizeDescription +
                      prizeWithOrangeLine.prizeImage
                    }
                    prizeDescription={prizeWithOrangeLine.prizeDescription}
                    prizeImage={prizeWithOrangeLine.prizeImage}
                  />
                ))}
              </ul>
            </GreyContainer>

            <p className="cash-games-stage__footer-note">
              * ლიდერბორდის შედეგები განახლება{" "}
              <a className="cash-games-stage__footer-note__link" href="#">
                პოკერის ლობიში
              </a>
            </p>
          </>
        </StageInfoContainer>
      </section>

      <SideLeaderboardsNotification />
    </>
  );
}

// ------ COMPONENT: END ------ //
