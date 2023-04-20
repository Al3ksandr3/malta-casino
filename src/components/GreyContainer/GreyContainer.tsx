import "./GreyContainer.scss";

import React from "react";

interface GreyContainerProps {
  children: React.ReactNode;
  additionalCSSClass?: string;
}

// ------ COMPONENT: START ------ //

export default function GreyContainer(props: GreyContainerProps) {
  const applicableCSSClasses = `grey-container${
    props.additionalCSSClass ? " " + props.additionalCSSClass : ""
  }`;

  return <div className={applicableCSSClasses}>{props.children}</div>;
}

// ------ COMPONENT: END ------ //
