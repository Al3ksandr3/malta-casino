import "./StagesListItem.scss";

import { generateStageItemClassesBasedOnStageSelection } from "./helper-functions";

interface StagesListItemProps {
  stageDate: string;
  stageDescription: string;
  stageIndex: number;
  stageIsSelected: boolean;
}

// ------ COMPONENT: START ------ //

export default function StagesListItem(props: StagesListItemProps) {
  const [baseClass, stageDateClass, stageDescriptionClass]: string[] =
    generateStageItemClassesBasedOnStageSelection(props.stageIsSelected);

  return (
    <li className={baseClass} data-stage-index={props.stageIndex}>
      <p className={stageDateClass}>{props.stageDate}</p>
      <p className={stageDescriptionClass}>{props.stageDescription}</p>
    </li>
  );
}

// ------ COMPONENT: END ------ //
