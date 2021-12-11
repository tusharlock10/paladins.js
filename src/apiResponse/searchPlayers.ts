interface SearchPlayer {
  Name: string;
  hz_player_name: string;
  player_id: string;
  portal_id: string;
  privacy_flag: string;
  ret_msg: string | null;
}

export type SearchPlayers = SearchPlayer[];