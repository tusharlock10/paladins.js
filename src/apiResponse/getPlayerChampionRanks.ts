interface PlayerChampionRank {
  Assists: number;
  Deaths: number;
  Gold: number;
  Kills: number;
  LastPlayed: string;
  Losses: number;
  MinionKills: number;
  Minutes: number;
  Rank: number;
  Wins: number;
  Worshippers: number;
  champion: string;
  champion_id: string;
  player_id: string;
  ret_msg: string | null;
}

export type GetPlayerChampionRanks = PlayerChampionRank[];