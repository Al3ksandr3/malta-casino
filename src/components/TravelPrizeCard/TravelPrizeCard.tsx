import "./TravelPrizeCard.scss";

interface TravelPrizeCardProps {
  cardTitle: string;
  cardDetails: string[];
  cardIcon: string;
  additionalCSSClass?: string;
}

// ------ COMPONENT: START ------ //

export default function TravelPrizeCard(props: TravelPrizeCardProps) {
  const applicableCSSClasses = props.additionalCSSClass
    ? `travel-prize-card ${props.additionalCSSClass}`
    : "travel-prize-card";

  return (
    <li className={applicableCSSClasses}>
      <img
        className="travel-prize-card__icon"
        src={props.cardIcon}
        alt="Icon of a plane."
      />
      <p className="travel-prize-card__title">{props.cardTitle}</p>
      {props.cardDetails.map((cardDetail) => (
        <p key={cardDetail} className="travel-prize-card__detail">
          {cardDetail}
        </p>
      ))}
    </li>
  );
}

// ------ COMPONENT: END ------ //
