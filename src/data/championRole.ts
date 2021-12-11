import * as Strings from "../strings";

type ChampionRoleType = Record<Strings.ChampionRole, Strings.ChampionRole>;

export const ChampionRole: ChampionRoleType = {
  "Damage": "Damage",
  "Flank": "Flank",
  "Support": "Support",
  "Tank": "Tank",
};