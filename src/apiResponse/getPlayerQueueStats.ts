import { Champions } from '../enums';

interface PlayerQueueStat {
  Assists: number;
  Champion: string;
  ChampionId: Champions;
  Deaths: number;
  Gold: number;
  Kills: number;
  LastPlayed: string;
  Losses: number;
  Matches: number;
  Minutes: number;
  Queue: string;
  Wins: number;
  player_id: string;
  ret_msg: string | null;
}

export type GetPlayerQueueStats = PlayerQueueStat[];