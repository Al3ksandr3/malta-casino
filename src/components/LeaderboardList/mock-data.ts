import PlaneIconTransparent from "./assets/plane-icon-transparent.png";
import TicketIconTransparent from "./assets/ticket-icon-transparent.png";

interface ILeaderboardPrize {
  placeIndex: number;
  voucherAmount: string;
  prizeDescription: string | { description: string; prizeIcon: string };
}

// ------ MOCK DATA: START ------ //

export const leaderboardPrizesList: ILeaderboardPrize[] = [
  {
    placeIndex: 1,
    voucherAmount: "—",
    prizeDescription: {
      description: "A კატეგორიის საგზური",
      prizeIcon: PlaneIconTransparent,
    },
  },
  {
    placeIndex: 2,
    voucherAmount: "—",
    prizeDescription: {
      description: "B კატეგორიის საგზური",
      prizeIcon: TicketIconTransparent,
    },
  },
  {
    placeIndex: 3,
    voucherAmount: "1 500 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 4,
    voucherAmount: "1 200 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 5,
    voucherAmount: "1 000 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 6,
    voucherAmount: "800 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 7,
    voucherAmount: "700 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 8,
    voucherAmount: "600 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 9,
    voucherAmount: "500 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 10,
    voucherAmount: "400 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 11,
    voucherAmount: "300 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 12,
    voucherAmount: "200 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 13,
    voucherAmount: "100 ₾",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 14,
    voucherAmount: "—",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 15,
    voucherAmount: "—",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 16,
    voucherAmount: "—",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 17,
    voucherAmount: "—",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 18,
    voucherAmount: "—",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 19,
    voucherAmount: "—",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
  {
    placeIndex: 20,
    voucherAmount: "—",
    prizeDescription: "სპეც. ტურნირის ბილეთი",
  },
];

// ------ MOCK DATA: END ------ //
