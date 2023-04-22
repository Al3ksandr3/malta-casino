import "./SimilarPromotionsItem.scss";

interface SimilarPromotionsItemProps {
  bannerSrc: string;
}

// ------ COMPONENT: START ------ //

export default function SimilarPromotionsItem(
  props: SimilarPromotionsItemProps
) {
  return (
    <li className="similar-promotions-item">
      <img
        className="similar-promotions-item__banner"
        src={props.bannerSrc}
        alt="Arrow pointing down, representing the feature to expand the current list item in order to get an answer on the specified topic."
      />
    </li>
  );
}

// ------ COMPONENT: END ------ //
