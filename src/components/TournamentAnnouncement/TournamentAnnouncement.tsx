import "./TournamentAnnouncement.scss";

import { useSetIntersectionObserver } from "../../hooks/useSetIntersectionObserver";

// ------ COMPONENT: START ------ //

export default function TournamentAnnouncement() {
  const headerContent: string =
    "მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი";

  const detailsContent: string = "მოხვდი პოკერის ფესტივალზე მალტაში";

  const ref = useSetIntersectionObserver();

  return (
    <span className="tournament-announcement" ref={ref}>
      <h1 className="tournament-announcement__header">{headerContent}</h1>
      <h2 className="tournament-announcement__details">{detailsContent}</h2>
    </span>
  );
}

// ------ COMPONENT: END ------ //
