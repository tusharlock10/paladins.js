import { Champions } from '../enums';

interface LoadoutItem {
  ItemId: number;
  ItemName: string;
  Points: number;
}

interface PlayerLoadout {
  ChampionId: Champions;
  ChampionName: string;
  DeckId: number;
  DeckName: string;
  LoadoutItems: LoadoutItem[];
  playerId: number;
  playerName: string;
  ret_msg: string | null;
}

export type GetPlayerLoadouts = PlayerLoadout[];