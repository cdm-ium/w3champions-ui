import { WinLoss } from "@/store/overallStats/types";
import { EGameMode, ERaceEnum } from "@/store/typings";

export type RankingState = {
  league: number;
  working: boolean;
  page: number;
  totalRanks: number;
  ladders: Ladder[];
  rankings: Ranking[];
  topFive: Ranking[];
  searchRanks: Ranking[];
  gameMode: EGameMode;
  seasons: Season[];
  selectedSeason: Season;
};

export type Ladder = {
  gateway: Gateways;
  gameMode: EGameMode;
  season: number;
  leagues: League[];
};

export type Season = {
  id: number;
};

export type League = {
  id: number;
  name: string;
  order: number;
  division: number;
  maxParticipantCount: number;
};

export type Ranking = {
  id: string;
  season: number;
  gateway: number;
  league: number;
  leagueDivision: number;
  leagueOrder: number;
  race: ERaceEnum;
  leagueName: string;
  rankNumber: number;
  rankingPoints: number;
  gameMode: EGameMode;
  player: PlayerOverview;
  playersInfo: PlayerInfo[];
};

export interface PlayerInfo {
  calculatedRace: ERaceEnum;
  selectedRace: number;
  pictureId: number;
  isClassicPicture: boolean;
  twitchName: string;
  clanId: string;
  country: string;
  countryCode: string;
  location: string;
}

export interface PlayerId {
  name: string;
  battleTag: string;
}

export interface PlayerOverview extends WinLoss {
  id: string;
  name: string;
  mmr: number;
  gateWay: number;
  playerIds: PlayerId[];
}

export enum Gateways {
  America = 10,
  Europe = 20,
  Asia = 30,
}
