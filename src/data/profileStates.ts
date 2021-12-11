import * as Enums from "../enums";
import * as Strings from "../strings";

type ProfileStatesType = Record<Enums.ProfileStates, Strings.ProfileStates>;

export const ProfileStates: ProfileStatesType = {
  0: "Offline",
  1: "In Lobby",
  2: "Champion Selection",
  3: "In Match",
  4: "Online",
  5: "Unknown",
};