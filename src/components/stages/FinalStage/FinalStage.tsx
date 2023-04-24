import "./FinalStage.scss";

import MysteriousKey from "./assets/mysterious-key.png";
import GreyContainer from "../../GreyContainer/GreyContainer";

import StageInfoContainer from "../../StageInfoContainer/StageInfoContainer";
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
      ></StageInfoContainer>

      <StageInfoContainer
        activateHeaderBlock={true}
        activateOrangeLine={true}
        activateContentBlock={true}
        additionalCSSClass="stage-info-container---final-stage-case--two"
        headerText="მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე"
      ></StageInfoContainer>

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
