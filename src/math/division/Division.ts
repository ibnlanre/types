import { Divide } from "../divide";

export type Division<Numbers extends number[]> = Numbers extends [
  ...infer Rest extends number[],
  infer Tail extends number
]
  ? Rest extends []
    ? Tail
    : Divide<Division<Rest>, Tail>
  : 1;
