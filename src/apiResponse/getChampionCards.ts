import { ActiveFlag, Champions, Rarity } from '../enums';

interface ChampionCard {
  active_flag_activation_schedule: ActiveFlag;
  active_flag_lti: ActiveFlag;
  card_description: string;
  card_id1: number;
  card_id2: number;
  card_name: string;
  card_name_english: string;
  championCard_URL: string;
  championIcon_URL: string;
  championTalent_URL: string | null;
  champion_id: Champions;
  champion_name: string;
  exclusive: ActiveFlag;
  rank: number;
  rarity: Rarity;
  recharge_seconds: number;
  ret_msg: string | null;
}

export type GetChampionCards = ChampionCard[];