import EventIcon from "./assets/event-icon.png";
import HotelIcon from "./assets/hotel-icon.png";
import TicketIcon from "./assets/ticket-icon.png";
import MoneyIcon from "./assets/money-icon.png";

interface ITravelPack {
  key: string;
  travelPackHeader: string;
  travelPackItems: {
    travelPackItemIcon: string;
    travelPackItemDescription: string;
    additionalCSSClass?: string;
  }[];
}

// ------ MOCK DATA: START ------ //

export const travelPacksList: ITravelPack[] = [
  {
    key: "a",
    travelPackHeader: "A კატეგორიის საგზურში შედის",
    travelPackItems: [
      {
        travelPackItemIcon: TicketIcon,
        travelPackItemDescription: "ორმხრივი ავიაბილეთი",
        additionalCSSClass: "travel-pack-item--type-one",
      },
      {
        travelPackItemIcon: EventIcon,
        travelPackItemDescription:
          "The festival in Malta-ს მეინ ივენთის ბაი-ინი",
        additionalCSSClass: "travel-pack-item--type-one",
      },
      {
        travelPackItemIcon: EventIcon,
        travelPackItemDescription: "Holde ან Omaha ჰაიროლერ ტურნირის ბაი-ინი",
        additionalCSSClass: "travel-pack-item--type-two",
      },
      {
        travelPackItemIcon: HotelIcon,
        travelPackItemDescription: "სასტუმრო Golden Tulip Vivaldi Hotel",
        additionalCSSClass: "travel-pack-item--type-one",
      },
      {
        travelPackItemIcon: MoneyIcon,
        travelPackItemDescription: "€500 სახარჯი ფული",
        additionalCSSClass: "travel-pack-item--type-one",
      },
    ],
  },

  {
    key: "b",
    travelPackHeader: "A კატეგორიის საგზურში შედის",
    travelPackItems: [
      {
        travelPackItemIcon: TicketIcon,
        travelPackItemDescription: "ორმხრივი ავიაბილეთი",
        additionalCSSClass: "travel-pack-item--type-one",
      },
      {
        travelPackItemIcon: EventIcon,
        travelPackItemDescription:
          "The festival in Malta-ს მეინ ივენთის ბაი-ინი",
        additionalCSSClass: "travel-pack-item--type-one",
      },
      {
        travelPackItemIcon: EventIcon,
        travelPackItemDescription: "Holde ან Omaha ჰაიროლერ ტურნირის ბაი-ინი",
        additionalCSSClass: "travel-pack-item--type-two",
      },
      {
        travelPackItemIcon: HotelIcon,
        travelPackItemDescription: "სასტუმრო Golden Tulip Vivaldi Hotel",
        additionalCSSClass: "travel-pack-item--type-one",
      },
      {
        travelPackItemIcon: MoneyIcon,
        travelPackItemDescription: "€500 სახარჯი ფული",
        additionalCSSClass: "travel-pack-item--type-one",
      },
    ],
  },

  {
    key: "c",
    travelPackHeader: "A კატეგორიის საგზურში შედის",
    travelPackItems: [
      {
        travelPackItemIcon: TicketIcon,
        travelPackItemDescription: "ორმხრივი ავიაბილეთი",
        additionalCSSClass: "travel-pack-item--type-one",
      },
      {
        travelPackItemIcon: EventIcon,
        travelPackItemDescription:
          "The festival in Malta-ს მეინ ივენთის ბაი-ინი",
        additionalCSSClass: "travel-pack-item--type-one",
      },

      {
        travelPackItemIcon: HotelIcon,
        travelPackItemDescription: "სასტუმრო",
        additionalCSSClass: "travel-pack-item--type-one",
      },
      {
        travelPackItemIcon: MoneyIcon,
        travelPackItemDescription: "€500 სახარჯი ფული",
        additionalCSSClass: "travel-pack-item--type-one",
      },
    ],
  },
];

// ------ MOCK DATA: END ------ //
