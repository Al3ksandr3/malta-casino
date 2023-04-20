// ------ HELPER FUNCTIONS: START ------ //

export function setMainElementHeight(): void {
  const rootElement: HTMLElement = document.querySelector(
    ":root"
  ) as HTMLHtmlElement;

  const requiredViewportPortion: string = "57vh";

  rootElement.style.setProperty(
    "--main-viewport-height",
    requiredViewportPortion
  );

  const mainElement: HTMLElement = document.querySelector(
    ".main"
  ) as HTMLElement;

  const heightOfMain: number = getHeightOfMain(mainElement);

  mainElement.style.setProperty("height", `${heightOfMain}px`);
}

// ------------------------------------------------------------------------------------------------------------

function getHeightOfMain(mainElement: HTMLElement): number {
  const childrenElementsOfMain: HTMLCollection = mainElement.children;

  const childrenElementsCount: number = childrenElementsOfMain.length;

  let heightOfMain: number = 0;

  for (let i = 0; i < childrenElementsCount; i++) {
    const childElement = childrenElementsOfMain.item(i) as HTMLElement;

    const childElementStyles: CSSStyleDeclaration =
      window.getComputedStyle(childElement);

    const childElementHeight: number = getNumericValueWithoutUnit(
      childElementStyles.height || "0px",
      "px"
    );

    const childElementTopMargin: number = getNumericValueWithoutUnit(
      childElementStyles.marginTop || "0px",
      "px"
    );

    const childElementBottomMargin: number = getNumericValueWithoutUnit(
      childElementStyles.marginBottom || "0px",
      "px"
    );

    heightOfMain +=
      childElementHeight + childElementTopMargin + childElementBottomMargin;
  }

  return heightOfMain;
}

// ------------------------------------------------------------------------------------------------------------

function getNumericValueWithoutUnit(valueWithUnit: string, unit: "px"): number {
  let valueWithUnitLength = valueWithUnit.length;

  let valueWithoutUnit: string = valueWithUnit.slice(
    0,
    valueWithUnitLength - unit.length
  );

  return Number(valueWithoutUnit);
}

// ------ HELPER FUNCTIONS: END ------ //
