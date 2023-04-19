import "./App.scss";

import RulesAndConditionsSection from "../RulesAndConditionsSection/RulesAndConditionsSection";
import CallToPlay from "../CallToPlay/CallToPlay";

// ------ COMPONENT: START ------ //

export default function App() {
  return (
    <div className="app">
      <RulesAndConditionsSection />
      <CallToPlay />
    </div>
  );
}

// ------ COMPONENT: END ------ //
