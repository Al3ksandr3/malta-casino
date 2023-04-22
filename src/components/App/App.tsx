import "./App.scss";

import Header from "../Header/Header";
import CallToPlay from "../CallToPlay/CallToPlay";
import Main from "../Main/Main";

import { useLayoutEffect } from "react";
import { calculateBottomPaddingForMainElement } from "./helper-functions";

// ------ COMPONENT: START ------ //

export default function App() {
  useLayoutEffect(() => {
    calculateBottomPaddingForMainElement();

    window.addEventListener("resize", calculateBottomPaddingForMainElement);

    return () => {
      window.removeEventListener(
        "resize",
        calculateBottomPaddingForMainElement
      );
    };
  }, []);

  return (
    <div className="app">
      <Header />
      {/* <CallToPlay /> */}
      <Main />
    </div>
  );
}

// ------ COMPONENT: END ------ //
