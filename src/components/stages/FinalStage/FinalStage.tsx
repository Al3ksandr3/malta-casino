import "./FinalStage.scss";

import MysteriousKey from "./assets/mysterious-key.png";
import FestivalBanner from "./assets/festival-banner.png";

import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";
import TravelPacks from "../../TravelPacks/TravelPacks";
import TravelPrizesList from "../../TravelPrizesList/TravelPrizesList";
import MysteriousKeysList from "../../MysteriousKeysList/MysteriousKeysList";

// ------ COMPONENT: START ------ //

export default function FinalStage() {
  return (
    <section className="final-stage">
      <StageInfoContainer
        activateHeaderBlock={false}
        activateOrangeLine={false}
        activateContentBlock={true}
        additionalCSSClass="stage-info-container---final-stage-case--one"
      >
        <>
          <img
            className="final-stage___festival-banner"
            src={FestivalBanner}
            alt="Banner for the festival in Malta."
          />
          <p className="final-stage___the-festival-in-malta-header">
            გაემგზავრე THE FESTIVAL IN MALTA-ზე
          </p>
          <p className="final-stage___the-festival-in-malta-details">
            The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
            პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
          </p>
          <TravelPacks />
        </>
      </StageInfoContainer>

      <StageInfoContainer
        activateHeaderBlock={true}
        activateOrangeLine={true}
        activateContentBlock={true}
        additionalCSSClass="stage-info-container---final-stage-case--two"
        headerText="მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე"
      >
        <>
          <TravelPrizesList />
          <p className="final-stage___travel-prize-hint-one">
            * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზე მოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით.
          </p>
          <p className="final-stage___travel-prize-hint-two">
            * ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით.
          </p>
        </>
      </StageInfoContainer>

      <StageInfoContainer
        activateHeaderBlock={true}
        activateOrangeLine={true}
        activateContentBlock={true}
        additionalCSSClass="stage-info-container---final-stage-case--three"
        headerText={
          <img
            className="final-stage___mysterious-keys-list-header"
            src={MysteriousKey}
            alt="Title representing 'Mysterious Keys' list."
          />
        }
      >
        <>
          <p className="final-stage___mysterious-keys-list-description">
            მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
            მიიღებენ საიდუმლო გასაღებს
          </p>
          <MysteriousKeysList />
        </>
      </StageInfoContainer>
    </section>
  );
}

// ------ COMPONENT: END ------ //
