import "./FinalStage.scss";

import MysteriousKey from "./assets/mysterious-key.png";
import GreyContainer from "../../GreyContainer/GreyContainer";

import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";
import MysteriousKeysList from "../../MysteriousKeysList/MysteriousKeysList";
import TravelPrizesList from "../../TravelPrizesList/TravelPrizesList";

// ------ COMPONENT: START ------ //

export default function FinalStage() {
  return (
    <section className="final-stage">
      <StageInfoContainer
        activateHeaderBlock={false}
        activateOrangeLine={false}
        activateContentBlock={true}
        additionalCSSClass="stage-info-container---final-stage-case--one"
      ></StageInfoContainer>

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
