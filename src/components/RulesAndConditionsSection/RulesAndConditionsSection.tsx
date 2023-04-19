import "./RulesAndConditionsSection.scss";

import SectionHeader from "../SectionHeader/SectionHeader";
import RulesAndConditionsItem from "../RulesAndConditionsItem/RulesAndConditionsItem";

// ------ COMPONENT: START ------ //

export default function RulesAndConditionsSection() {
  const rulesAndConditionsList = [
    "როდის იწყება და რა ფორმატით გაიმართება აქცია?",
    "როგორ მივიღო აქციაში მონაწილეობა?",
    "სხვადასხვა",
  ];

  return (
    <section className="rules-and-conditions-section">
      <SectionHeader>წესები და პირობები</SectionHeader>
      <ul className="rules-and-conditions-section__list">
        {rulesAndConditionsList.map((content) => (
          <RulesAndConditionsItem>{content}</RulesAndConditionsItem>
        ))}
      </ul>
    </section>
  );
}

// ------ COMPONENT: END ------ //
