import "./StageSectionHeader.scss";

interface StageSectionHeaderProps {
  children: string;
}

// ------ COMPONENT: START ------ //

export default function StageSectionHeader(props: StageSectionHeaderProps) {
  return <h2 className="stage-section-header">{props.children}</h2>;
}

// ------ COMPONENT: END ------ //
