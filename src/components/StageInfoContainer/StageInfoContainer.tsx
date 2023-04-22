import "./StageInfoContainer.scss";

import React from "react";

interface StageInfoContainerProps {
  headerText?: string;
  children?: React.ReactElement;
  additionalCSSClass?: string;
  activateContentBlock: boolean;
}

// ------ COMPONENT: START ------ //

export default function StageInfoContainer(props: StageInfoContainerProps) {
  const parentElementCSSClasses: string = props.additionalCSSClass
    ? `stage-info-container ${props.additionalCSSClass}`
    : "stage-info-container";

  return (
    <div className={parentElementCSSClasses}>
      <h3 className="stage-info-container__header">
        {props.headerText || props.children}
      </h3>
      <span className="stage-info-container__orange-line" />
      {props.activateContentBlock && (
        <div className="stage-info-container__content">{props.children}</div>
      )}
    </div>
  );
}

// ------ COMPONENT: END ------ //
