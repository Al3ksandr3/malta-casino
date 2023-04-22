import "./App.scss";

import Header from "../Header/Header";
import CallToPlay from "../CallToPlay/CallToPlay";
import Main from "../Main/Main";

// ------ COMPONENT: START ------ //

export default function App() {
  return (
    <div className="app">
      <Header />
      {/* <CallToPlay /> */}
      <Main />
    </div>
  );
}

// ------ COMPONENT: END ------ //
