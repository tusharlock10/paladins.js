interface LoadoutItem {
  ItemId: number;
  ItemName: string;
  Points: number;
}

interface PlayerLoadout {
  ChampionId: number;
  ChampionName: string;
  DeckId: number;
  DeckName: string;
  LoadoutItems: LoadoutItem[];
  playerId: number;
  playerName: string;
  ret_msg: string | null;
}

export type GetPlayerLoadouts = PlayerLoadout[];