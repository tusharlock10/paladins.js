import * as Enums from "../enums";
import * as Strings from "../strings";

type PortalsType = Partial<Record<Enums.Portals, Strings.Portals>>;

export const Portals: PortalsType = {
  0: "Unknown",
  1: "PC",
  5: "Steam",
  28: "Epic",
  9: "PSN",
  10: "XboxLive",
  22: "Nintendo",
  25: "Discord",
  14: "Mixer",
  12: "Facebook",
  13: "Google",
};