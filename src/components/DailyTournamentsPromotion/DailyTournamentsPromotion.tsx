import "./DailyTournamentsPromotion.scss";

import BannerWithRing from "../BannerWithRing/BannerWithRing";

import { dailyTournamentsList } from "./mock-data";

// ------ COMPONENT: START ------ //

export default function DailyTournamentsPromotion() {
  return (
    <div className="daily-tournaments-promotion">
      <h4 className="daily-tournaments-promotion__header">
        ყოველდღიური ტურნირები და სატელიტები
      </h4>
      <span className="daily-tournaments-promotion__banners-with-ring">
        {dailyTournamentsList.map((dailyTournamentData) => {
          if (
            dailyTournamentData.tournamentName.toLowerCase() !== "main events"
          ) {
            return (
              <BannerWithRing
                key={dailyTournamentData.tournamentName}
                additionalCSSClass="banner-with-ring---daily-tournaments-promotion-case--type-one"
                {...dailyTournamentData}
              />
            );
          }

          return (
            <BannerWithRing
              key={dailyTournamentData.tournamentName}
              additionalCSSClass="banner-with-ring---daily-tournaments-promotion-case--type-two"
              {...dailyTournamentData}
            />
          );
        })}
      </span>
      <p className="daily-tournaments-promotion__footnote">
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        Lord of the Rings, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </p>
    </div>
  );
}

// ------ COMPONENT: END ------ //
