import PlaneIconTypeOne from "./assets/plane-icon--type-one.png";
import PlaneIconTypeTwo from "./assets/plane-icon--type-two.png";

interface ITravelPrize {
  cardTitle: string;
  cardDetails: string[];
  cardIcon: string;
}

// ------ MOCK DATA: START ------ //

export const travelPrizesListOne: ITravelPrize[] = [
  {
    cardTitle: '"Cashgame Highrollers"',
    cardDetails: ["1 საგზური"],
    cardIcon: PlaneIconTypeOne,
  },
  {
    cardTitle: '"Cashgame Grinders"',
    cardDetails: ["1 საგზური"],
    cardIcon: PlaneIconTypeOne,
  },
  {
    cardTitle: '"Tournament Sharks"',
    cardDetails: ["1 საგზური"],
    cardIcon: PlaneIconTypeOne,
  },
];

export const travelPrizesListTwo: ITravelPrize[] = [
  {
    cardTitle: '"The Festival in Malta, GTD"',
    cardDetails: [
      "A კატეგორიის 1 საგზური",
      "B კატეგორიის 1 საგზური",
      "ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი ბაი-ინის გადახდით.",
    ],
    cardIcon: PlaneIconTypeTwo,
  },
  {
    cardTitle: '"The Lord of the Rings"',
    cardDetails: [
      "C კატეგორიის 1 საგზური",
      "ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი ბაი-ინის გადახდით.",
    ],
    cardIcon: PlaneIconTypeOne,
  },
];

// ------ MOCK DATA: END ------ //
