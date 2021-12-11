import { ActiveFlag } from '../enums';

interface MatchIdsByQueue {
  Active_Flag: ActiveFlag;
  Entry_Datetime: string;
  Match: string;
  ret_msg: string | null;
}

export type GetMatchIdsByQueue = MatchIdsByQueue[];