export function generateStageItemClassesBasedOnStageSelection(
  stageIsSelected: boolean
): string[] {
  let baseClass = "stages-list-item";

  let stageDateClass = `${baseClass}__stage-date${
    stageIsSelected ? "--selected" : ""
  }`;

  let stageDescriptionClass = `${baseClass}__stage-description${
    stageIsSelected ? "--selected" : ""
  }`;

  if (stageIsSelected) {
    baseClass = `${baseClass}--selected`;
  }

  return [baseClass, stageDateClass, stageDescriptionClass];
}
