import { MutableRefObject, useLayoutEffect, useRef } from "react";

// ------ HOOK: START ------ //

export function useSetIntersectionObserver(): MutableRefObject<null | HTMLSpanElement> {
  const ref = useRef<null | HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const headerCallToPlayElement = document.querySelector(
      ".header-call-to-play"
    ) as HTMLElement;

    const intersectionObserverOptions = { root: null, threshold: 0.05 };

    const intersectionObserverCallback: IntersectionObserverCallback = (
      entries
    ) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.intersectionRatio < 0.05) {
          headerCallToPlayElement.classList.add(
            "header-call-to-play--solid-bg"
          );
        } else if (entry.isIntersecting && entry.intersectionRatio > 0.05) {
          headerCallToPlayElement.classList.remove(
            "header-call-to-play--solid-bg"
          );
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(
      intersectionObserverCallback,
      intersectionObserverOptions
    );

    intersectionObserver.observe(ref.current as HTMLSpanElement);

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return ref;
}

// ------ HOOK: END ------ //
