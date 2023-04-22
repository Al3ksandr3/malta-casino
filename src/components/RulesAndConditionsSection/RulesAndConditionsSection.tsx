import "./RulesAndConditionsSection.scss";

import StageSectionHeader from "../StageSectionHeader/StageSectionHeader";
import RulesAndConditionsItem from "../RulesAndConditionsItem/RulesAndConditionsItem";

// ------ COMPONENT: START ------ //

export default function RulesAndConditionsSection() {
  const rulesAndConditionsList: string[] = [
    "როდის იწყება და რა ფორმატით გაიმართება აქცია?",
    "როგორ მივიღო აქციაში მონაწილეობა?",
    "სხვადასხვა",
  ];

  return (
    <section className="rules-and-conditions-section">
      <StageSectionHeader>წესები და პირობები</StageSectionHeader>
      <ul className="rules-and-conditions-section__list">
        {rulesAndConditionsList.map((content) => (
          <RulesAndConditionsItem itemContent={content} />
        ))}
      </ul>
    </section>
  );
}

// ------ COMPONENT: END ------ //
