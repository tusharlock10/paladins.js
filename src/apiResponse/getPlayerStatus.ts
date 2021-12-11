import { ProfileStates, Queue } from '../enums';

interface PlayerStatus {
  Match?: number;
  match_queue_id?: Queue;
  personal_status_message?: null;
  ret_msg?: null;
  status: ProfileStates;
  status_string?: string;
}

export type GetPlayerStatus = PlayerStatus;