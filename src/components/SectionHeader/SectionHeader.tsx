import "./SectionHeader.scss";

interface SectionHeaderProps {
  children: string;
}

// ------ COMPONENT: START ------ //

export default function SectionHeader(props: SectionHeaderProps) {
  return <h2 className="section-header">{props.children}</h2>;
}

// ------ COMPONENT: END ------ //
