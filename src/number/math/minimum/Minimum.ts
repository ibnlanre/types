import type { Smaller } from "../smaller";

export type Minimum<Numbers extends number[]> = Numbers extends [
  ...infer Rest extends number[],
  infer Tail extends number
]
  ? Rest extends []
    ? Tail
    : Smaller<Minimum<Rest>, Tail>
  : 0;
