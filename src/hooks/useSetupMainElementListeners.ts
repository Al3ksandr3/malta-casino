import { useLayoutEffect } from "react";

import { setMainElementHeight } from "../components/App/helper-functions";

// ------ HOOK: START ------ //

export function useSetupMainElementListeners(): void {
  useLayoutEffect(() => {
    setMainElementHeight();

    function resizeHandler(resizeE: UIEvent) {
      setMainElementHeight();
    }

    window.addEventListener("resize", resizeHandler);

    // setting up mutation observer for <main> element

    function mutationObserverCallback(mutationsList: MutationRecord[]) {
      for (const mutationRecord of mutationsList) {
        if (mutationRecord.type === "childList") {
          setMainElementHeight();
        }
      }
    }

    const mainElement: HTMLElement = document.querySelector(
      ".main"
    ) as HTMLElement;

    const mutationObserver: MutationObserver = new MutationObserver(
      mutationObserverCallback
    );

    mutationObserver.observe(mainElement, { childList: true });

    return () => {
      window.removeEventListener("resize", resizeHandler);
      mutationObserver.disconnect();
    };
  }, []);
}

// ------ HOOK: END ------ //
