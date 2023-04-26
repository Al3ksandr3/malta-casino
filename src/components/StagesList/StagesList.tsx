import "./StagesList.scss";

import StagesListItem from "../StagesListItem/StagesListItem";

import React from "react";

interface StagesListProps {
  clickHandler: React.MouseEventHandler;
  indexOfSelectedStage: number;
}

interface IStageListItem {
  stageDate: string;
  stageDescription: string;
}

// ------ COMPONENT: START ------ //

export default function StagesList(props: StagesListProps) {
  const stagesListItems: IStageListItem[] = [
    { stageDate: "1 - 29 აპრილი", stageDescription: "Cash Games" },
    { stageDate: "13 - 29 აპრილი", stageDescription: "Spring Series" },
    { stageDate: "30 აპრილი", stageDescription: "Final Stage" },
  ];

  return (
    <ul className="stages-list" onClick={props.clickHandler}>
      {stagesListItems.map((stage, index) => (
        <StagesListItem
          key={stage.stageDate + stage.stageDescription}
          {...stage}
          stageIndex={index}
          stageIsSelected={props.indexOfSelectedStage === index ? true : false}
        />
      ))}
    </ul>
  );
}

// ------ COMPONENT: END ------ //
