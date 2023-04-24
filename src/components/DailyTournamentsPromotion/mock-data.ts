import RingBannerTypeOne from "./assets/ring-banner--type-one.png";
import RingBannerTypeTwo from "./assets/ring-banner--type-two.png";

interface IDailyTournament {
  tournamentName: string;
  tournamentPrize: string;
  tournamentBanner: string;
  tournamentDate: string;
  tournamentAdditionalInfo: string;
}

// ------ MOCK DATA: START ------ //

export const dailyTournamentsList: IDailyTournament[] = [
  {
    tournamentName: "Holdem Highrollers",
    tournamentPrize: "50 000 ₾",
    tournamentBanner: RingBannerTypeOne,
    tournamentDate: "27 აპრილი",
    tournamentAdditionalInfo: "ბაი-ინი 550₾",
  },

  {
    tournamentName: "Omaha Highrollers",
    tournamentPrize: "50 000 ₾",
    tournamentBanner: RingBannerTypeOne,
    tournamentDate: "28 აპრილი",
    tournamentAdditionalInfo: "ბაი-ინი 550₾",
  },

  {
    tournamentName: "Main Events",
    tournamentPrize: "150 000 ₾",
    tournamentBanner: RingBannerTypeTwo,
    tournamentDate: "29 აპრილი",
    tournamentAdditionalInfo: "ბაი-ინი 550₾",
  },
];

// ------ MOCK DATA: END ------ //
