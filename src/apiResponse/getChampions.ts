import { ActiveFlag, DamageType, Roles } from '../enums';
import { Champions } from "../strings";

interface Ability {
  Description: string;
  Id: number;
  Summary: string;
  URL: string;
  damageType: DamageType;
  rechargeSeconds: number;
}

interface Champion {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  AbilityId1: number;
  AbilityId2: number;
  AbilityId3: number;
  AbilityId4: number;
  AbilityId5: number;
  Ability_1: Ability;
  Ability_2: Ability;
  Ability_3: Ability;
  Ability_4: Ability;
  Ability_5: Ability;
  ChampionAbility1_URL: string;
  ChampionAbility2_URL: string;
  ChampionAbility3_URL: string;
  ChampionAbility4_URL: string;
  ChampionAbility5_URL: string;
  ChampionCard_URL: string;
  ChampionIcon_URL: string;
  Cons: string;
  Health: number;
  Lore: string;
  Name: Champions;
  Name_English: Champions;
  OnFreeRotation: string;
  OnFreeWeeklyRotation: string;
  Pantheon: string;
  Pros: string;
  Roles: Roles;
  Speed: number;
  Title: string;
  Type: string;
  abilityDescription1: string;
  abilityDescription2: string;
  abilityDescription3: string;
  abilityDescription4: string;
  abilityDescription5: string;
  id: number;
  latestChampion: ActiveFlag;
  ret_msg: string | null;
}

export type GetChampions = Champion[];