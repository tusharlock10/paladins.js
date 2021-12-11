import { Champions, Portals, Queue, Ranks } from '../enums';

interface ActiveMatchDetail {
  Account_Champions_Played: number;
  Account_Level: number;
  ChampionId: Champions;
  ChampionLevel: number;
  ChampionName: string;
  Mastery_Level: number;
  Match: number;
  Queue: Queue;
  Skin?: string;
  SkinId?: number;
  Tier: Ranks;
  mapGame?: string;
  playerCreated?: string;
  playerId: number;
  playerName: string;
  playerPortalId: Portals | null;
  playerPortalUserId: string | null;
  playerRegion?: string;
  ret_msg: string;
  taskForce: number;
  tierLosses: number;
  tierWins: number;
}

export type GetActiveMatchDetails = ActiveMatchDetail[];