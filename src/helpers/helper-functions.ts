import React from "react";

export function getClickHandler(
  alertText: string = "Sorry, functionality is not implemented yet!"
) {
  function clickHandler() {
    alert(alertText);
  }
  return clickHandler;
}
