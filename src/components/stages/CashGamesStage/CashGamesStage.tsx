import "./CashGamesStage.scss";

import PlaneIcon from "./assets/plane-icon.png";
import TicketIcon from "./assets/ticket-icon.png";
import EnvelopeIcon from "./assets/envelope-icon.png";

import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";
import HoldemListHeader from "../../HoldemListHeader/HoldemListHeader";
import GreyContainer from "../../GreyContainer/GreyContainer";
import LeaderboardHeaderRow from "../../LeaderboardHeaderRow/LeaderboardHeaderRow";
import PrizeDescriptionItemWithOrangeLine from "../../PrizeDescriptionItemWithOrangeLine/PrizeDescriptionItemWithOrangeLine";
import SideLeaderboardsNotification from "../../SideLeaderboardsNotification/SideLeaderboardsNotification";

interface IPrizeWithOrangeLine {
  prizeDescription: string;
  prizeImage: string;
}

// ------ COMPONENT: START ------ //

export default function CashGamesStage() {
  const prizesWithOrangeLineList: IPrizeWithOrangeLine[] = [
    {
      prizeDescription: "The Festival in Malta-ს საგზური",
      prizeImage: PlaneIcon,
    },
    {
      prizeDescription: `სპეციალური ტურნირის "Cashgame Sharks" ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური`,
      prizeImage: TicketIcon,
    },
    { prizeDescription: "ტექნიკის მაღაზიის ვაუჩერი", prizeImage: EnvelopeIcon },
  ];

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
                <ul></ul>
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
                <ul></ul>
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
