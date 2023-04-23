import PlaneIcon from "./assets/plane-icon.png";
import TicketIcon from "./assets/ticket-icon.png";
import EnvelopeIcon from "./assets/envelope-icon.png";

interface IPrizeWithOrangeLine {
  prizeDescription: string;
  prizeImage: string;
}

// ------ MOCK DATA: START ------ //

export const prizesWithOrangeLineList: IPrizeWithOrangeLine[] = [
  {
    prizeDescription: "The Festival in Malta-ს საგზური",
    prizeImage: PlaneIcon,
  },
  {
    prizeDescription: `სპეციალური ტურნირის "Cashgame Sharks" ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური`,
    prizeImage: TicketIcon,
  },
  { prizeDescription: "ტექნიკის მაღაზიის ვაუჩერი", prizeImage: EnvelopeIcon },
];

// ------ MOCK DATA: END ------ //
