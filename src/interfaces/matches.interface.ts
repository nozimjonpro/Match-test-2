export type Player = {
  kills: number;
  username: string;
};

export type Team = {
  name: string;
  place: number;
  points: number;
  total_kills: number;
  players: Player[];
};

export interface Matches {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: Statuses;
  time: Date;
  title: string;
}

export type MatchResponse = {
  data: {
    matches: Matches[];
  };
};

export type Statuses = "Finished" | "Ongoing" | "Scheduled";

export type StatusType = { title: string; type: string };
