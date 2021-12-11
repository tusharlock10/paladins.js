import { ActiveFlag, Portals } from '../enums';

interface SearchPlayer {
  Name: string;
  hz_player_name: string;
  player_id: string;
  portal_id: Portals;
  privacy_flag: ActiveFlag;
  ret_msg: string | null;
}

export type SearchPlayers = SearchPlayer[];