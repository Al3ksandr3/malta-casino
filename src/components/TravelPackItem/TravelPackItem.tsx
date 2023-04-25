import "./TravelPackItem.scss";

interface TravelPackItemProps {
  travelPackItemIcon: string;
  travelPackItemDescription: string;
  additionalCSSClass?: string;
}

// ------ COMPONENT: START ------ //

export default function TravelPackItem(props: TravelPackItemProps) {
  const applicableCSSClasses: string = props.additionalCSSClass
    ? `travel-pack-item ${props.additionalCSSClass}`
    : "travel-pack-item";

  return (
    <li className={applicableCSSClasses}>
      <img
        className="travel-pack-item__icon"
        src={props.travelPackItemIcon}
        alt="Travel pack item icon."
      />
      <p className="travel-pack-item__description">
        {props.travelPackItemDescription}
      </p>
    </li>
  );
}

// ------ COMPONENT: END ------ //
