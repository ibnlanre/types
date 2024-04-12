import { Multiply } from "../multiply";

export type Multiplication<Numbers extends number[]> = Numbers extends [
  infer Head extends number,
  ...infer Rest extends number[]
]
  ? Multiply<Head, Multiplication<Rest>>
  : 1;
