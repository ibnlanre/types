import { Digit } from "@ibnlanre/types";

export type TailDigitArray<First extends Digit, Tail extends Digit[]> = [
  First,
  ...Tail
];
