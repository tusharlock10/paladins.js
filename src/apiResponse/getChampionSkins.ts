interface ChampionSkin {
  champion_id: number;
  champion_name: string;
  rarity: string;
  ret_msg: string | null;
  skin_id1: number;
  skin_id2: number;
  skin_name: string;
  skin_name_english: string;
}

export type GetChampionSkins = ChampionSkin[];