import type { Digit } from "@ibnlanre/types";

export type NumberPair<Left extends Digit[], Right extends Digit[]> = [
  left: Left,
  right: Right
];
