import "./SimilarPromotionsSection.scss";

import CashbackBanner from "./assets/cashback-banner.png";
import JackpotBanner from "./assets/jackpot-banner.png";
import CarBanner from "./assets/car-banner.png";

import StageSectionHeader from "../StageSectionHeader/StageSectionHeader";
import SimilarPromotionsItem from "../SimilarPromotionsItem/SimilarPromotionsItem";

// ------ COMPONENT: START ------ //

export default function SimilarPromotionsSection() {
  const bannersList = [
    CashbackBanner,
    JackpotBanner,
    CarBanner,
    CashbackBanner,
    JackpotBanner,
    CarBanner,
  ];

  return (
    <section className="similar-promotions-section">
      <StageSectionHeader additionalCSSClass="stage-section-header---similar-promotions-section-case">
        მსგავსი აქციები
      </StageSectionHeader>
      <ul className="similar-promotions-section__list">
        {bannersList.map((bannerSrc) => {
          const uniqueKey = `${bannerSrc} ${Math.random()}`;

          return (
            <SimilarPromotionsItem key={uniqueKey} bannerSrc={bannerSrc} />
          );
        })}
      </ul>
    </section>
  );
}

// ------ COMPONENT: END ------ //
