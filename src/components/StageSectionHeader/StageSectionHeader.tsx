import "./StageSectionHeader.scss";

interface StageSectionHeaderProps {
  children: string;
  additionalCSSClass?: string;
}

// ------ COMPONENT: START ------ //

export default function StageSectionHeader(props: StageSectionHeaderProps) {
  const applicableCSSClasses = props.additionalCSSClass
    ? `stage-section-header ${props.additionalCSSClass}`
    : "stage-section-header";

  return <h2 className={applicableCSSClasses}>{props.children}</h2>;
}

// ------ COMPONENT: END ------ //
