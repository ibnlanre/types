import type { Subtract } from "../subtract";

export type Subtraction<Numbers extends number[]> = Numbers extends [
  ...infer Rest extends number[],
  infer Tail extends number
]
  ? Rest extends []
    ? Tail
    : Subtract<Subtraction<Rest>, Tail>
  : 1;
