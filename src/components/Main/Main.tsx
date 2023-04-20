import StageInfoContainer from "../StageInfoContainer/StageInfoContainer";
import "./Main.scss";

import StagesList from "../StagesList/StagesList";

// ------ COMPONENT: START ------ //

export default function Main() {
  return (
    <main className="main">
      <StagesList />
      <StageInfoContainer headerText="1 ₾ რეიკი = 1 ქულას" />
      <StageInfoContainer headerText="1 ₾ რეიკი = 1 ქულას" />
    </main>
  );
}

// ------ COMPONENT: END ------ //
