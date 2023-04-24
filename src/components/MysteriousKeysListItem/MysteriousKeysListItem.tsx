import "./MysteriousKeysListItem.scss";

interface MysteriousKeysListItemProps {
  placeIndex: number;
  keyDescription: string;
}

// ------ COMPONENT: START ------ //

export default function MysteriousKeysListItem(
  props: MysteriousKeysListItemProps
) {
  return (
    <li className="mysterious-keys-list-item">
      <p className="mysterious-keys-list-item__place-index">
        {props.placeIndex}
      </p>
      <p className="mysterious-keys-list-item__key-description">
        {props.keyDescription}
      </p>
    </li>
  );
}

// ------ COMPONENT: END ------ //
