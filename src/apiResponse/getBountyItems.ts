import { ActiveFlag, SaleType } from '../enums';

interface BountyItem {
  active: ActiveFlag;
  bounty_item_id1: number;
  bounty_item_id2: number;
  bounty_item_name: string;
  champion_id: number;
  champion_name: string;
  final_price: string;
  initial_price: string;
  ret_msg: string | null;
  sale_end_datetime: string;
  sale_type: SaleType;
}

export type GetBountyItems = BountyItem[];