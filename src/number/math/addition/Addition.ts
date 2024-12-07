import type { Add } from "../add";

export type Addition<Numbers extends number[]> = Numbers extends [
  infer Head extends number,
  ...infer Rest extends number[]
]
  ? Add<Head, Addition<Rest>>
  : 0;
