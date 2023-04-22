import "./PrizeDescriptionItemWithOrangeLine.scss";

interface PrizeDescriptionItemWithOrangeLineProps {
  prizeDescription: string;
  prizeImage: string;
}

// ------ COMPONENT: START ------ //

export default function PrizeDescriptionItemWithOrangeLine(
  props: PrizeDescriptionItemWithOrangeLineProps
) {
  return (
    <li className="prize-description-item-with-orange-line">
      <span className="prize-description-item-with-orange-line__orange-line" />
      <span className="prize-description-item-with-orange-line__prize-image-wrapper">
        <img
          className="prize-description-item-with-orange-line__prize-image-wrapper__prize-image"
          src={props.prizeImage}
        />
      </span>
      <p className="prize-description-item-with-orange-line__prize-description">
        {props.prizeDescription}
      </p>
    </li>
  );
}

// ------ COMPONENT: END ------ //
