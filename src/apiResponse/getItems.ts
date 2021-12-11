import { Champions, ItemType } from '../enums';

interface Item {
  Description: string;
  DeviceName: string;
  IconId: number;
  ItemId: number;
  Price: number;
  ShortDesc: string;
  champion_id: Champions;
  itemIcon_URL: string;
  item_type: ItemType;
  recharge_seconds: number;
  ret_msg: string | null;
  talent_reward_level: number;
}


export type GetItems = Item[];