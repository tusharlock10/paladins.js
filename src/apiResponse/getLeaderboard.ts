import { Ranks } from '../enums';

interface LeaderboardPlayer {
  Leaves: number,
  Losses: number,
  Name: string,
  Points: number,
  PrevRank: number,
  Rank: number,
  Season: number,
  Tier: Ranks,
  Trend: number,
  Wins: number,
  player_id: string,
  ret_msg: string | null;
}

export type GetLeaderboard = LeaderboardPlayer[];