import "./TournamentAnnouncement.scss";

import { useSetIntersectionObserver } from "../../hooks/useSetIntersectionObserver";

// ------ COMPONENT: START ------ //

export default function TournamentAnnouncement() {
  const ref = useSetIntersectionObserver();

  return (
    <span className="tournament-announcement" ref={ref}>
      <h1 className="tournament-announcement__header">
        მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
      </h1>
      <h2 className="tournament-announcement__details">
        მოხვდი პოკერის ფესტივალზე მალტაში
      </h2>
    </span>
  );
}

// ------ COMPONENT: END ------ //
