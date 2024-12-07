import type { Bigger } from "../bigger";

export type Maximum<Numbers extends number[]> = Numbers extends [
  infer Head extends number,
  ...infer Rest extends number[]
]
  ? Bigger<Head, Maximum<Rest>>
  : 0;
