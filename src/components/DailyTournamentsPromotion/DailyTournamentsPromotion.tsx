import "./DailyTournamentsPromotion.scss";

import { dailyTournamentsList } from "./mock-data";

import BannerWithRing from "../BannerWithRing/BannerWithRing";

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
                additionalCSSClass="banner-with-ring---daily-tournaments-promotion-case--one"
                {...dailyTournamentData}
              />
            );
          }

          return (
            <BannerWithRing
              additionalCSSClass="banner-with-ring---daily-tournaments-promotion-case--two"
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
