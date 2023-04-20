import "./StagesList.scss";

import React, { useState } from "react";

import StagesListItem from "../StagesListItem/StagesListItem";

// ------ COMPONENT: START ------ //

export default function StagesList() {
  const [indexOfSelectedStage, setIndexOfSelectedStage] = useState(0);

  const stagesListItems = [
    { stageDate: "1 - 29 აპრილი", stageDescription: "Cash Games" },
    { stageDate: "13 - 29 აპრილი", stageDescription: "Spring Series" },
    { stageDate: "30 აპრილი", stageDescription: "Final Stage" },
  ];

  function clickHandler(clickE: React.PointerEvent<HTMLUListElement>) {
    const clickedStage = (clickE.target as HTMLElement).closest(
      ".stages-list-item"
    );

    if (!clickedStage) return;

    const indexOfClickedStage = (clickedStage as HTMLElement).dataset
      .stageIndex;

    setIndexOfSelectedStage(Number(indexOfClickedStage));
  }

  return (
    <ul className="stages-list" onClick={clickHandler}>
      {stagesListItems.map((stage, index) => (
        <StagesListItem
          key={stage.stageDate + stage.stageDescription}
          {...stage}
          stageIndex={index}
          stageIsSelected={indexOfSelectedStage === index ? true : false}
        />
      ))}
    </ul>
  );
}

// ------ COMPONENT: END ------ //
