import { Ranks } from '../enums';

interface Ranked {
  Leaves: number;
  Losses: number;
  Name: string;
  Points: number;
  PrevRank: number;
  Rank: number;
  Season: number;
  Tier: Ranks;
  Trend: number;
  Wins: number;
  player_id: null;
  ret_msg: string | null;
}

interface Player {
  ActivePlayerId: number;
  AvatarId: number;
  AvatarURL: string;
  Created_Datetime: string;
  HoursPlayed: number;
  Id: number;
  Last_Login_Datetime: string;
  Leaves: number;
  Level: number;
  LoadingFrame: string;
  Losses: number;
  MasteryLevel: number;
  MergedPlayers: null;
  MinutesPlayed: number;
  Name: string;
  Personal_Status_Message: string;
  Platform: string;
  RankedConquest: Ranked;
  RankedController: Ranked;
  RankedKBM: Ranked;
  Region: string;
  TeamId: number;
  Team_Name: string;
  Tier_Conquest: Ranks;
  Tier_RankedController: Ranks;
  Tier_RankedKBM: Ranks;
  Title: string;
  Total_Achievements: number;
  Total_Worshippers: number;
  Total_XP: number;
  Wins: number;
  hz_gamer_tag: null;
  hz_player_name: string;
  ret_msg: string | null;
}

export type GetPlayer = Player;
export type GetPlayerBatch = Player[];