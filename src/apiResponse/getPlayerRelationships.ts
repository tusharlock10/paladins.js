import { RelationStatus } from '../enums';

interface PlayerRelationship {
  account_id: string;
  friend_flags: string;
  name: string;
  player_id: string;
  portal_id: string;
  ret_msg: string | null;
  status: RelationStatus;
}

export type GetPlayerRelationships = PlayerRelationship[];