import "./TravelPacks.scss";

import TravelPack from "../TravelPack/TravelPack";

import { travelPacksList } from "./mock-data";

// ------ COMPONENT: START ------ //

export default function TravelPacks() {
  return (
    <div className="travel-packs">
      {travelPacksList.map((travelPack) => (
        <TravelPack
          key={travelPack.key}
          travelPackHeader={travelPack.travelPackHeader}
          travelPackItems={travelPack.travelPackItems}
        />
      ))}
    </div>
  );
}

// ------ COMPONENT: END ------ //
