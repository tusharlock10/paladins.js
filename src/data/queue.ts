import * as Enums from "../enums";
import * as Strings from "../strings";

type QueueType = Record<Enums.Queue, Strings.Queue>;

export const Queue: QueueType = {
  0: "Unknown",
  424: "Casual Siege",
  469: "Team Deathmatch",
  452: "Onslaught",
  486: "Ranked Keyboard",
  428: "Ranked Controller",
  434: "Shooting Range",
  425: "Training Siege",
  470: "Training Team Deathmatch",
  453: "Training Onslaught",
  445: "Test Maps",
  10260: "Siege: Beyond",
};