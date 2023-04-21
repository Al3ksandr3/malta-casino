import "./App.scss";

import Header from "../Header/Header";
import CallToPlay from "../CallToPlay/CallToPlay";
import Main from "../Main/Main";

import { useSetupMainElementListeners } from "../../hooks/useSetupMainElementListeners";

// ------ COMPONENT: START ------ //

export default function App() {
  // useSetupMainElementListeners();

  return (
    <div className="app">
      <Header />
      {/* <CallToPlay /> */}
      <Main />
    </div>
  );
}

// ------ COMPONENT: END ------ //
