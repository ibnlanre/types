import type { SignMap } from "../sign-map";

export type RoundingCarryMap = SignMap<
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
>;
