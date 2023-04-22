// ------ HELPER FUNCTIONS: START ------ //

export function calculateBottomPaddingForMainElement(): void {
  const documentHeight: number = document.documentElement.clientHeight;

  const requiredBottomPadding = documentHeight * 0.09;

  const rootElement: HTMLElement = document.querySelector(
    ":root"
  ) as HTMLElement;

  rootElement.style.setProperty(
    "--main-element-bottom-padding",
    `${requiredBottomPadding}px`
  );
}

// ------ HELPER FUNCTIONS: END ------ //
