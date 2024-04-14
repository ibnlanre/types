import { Digit } from "@ibnlanre/types";

export type FlipTable<T extends Digit[][]> = T extends [
  ...infer Head extends Digit[][],
  infer Tail extends Digit[]
]
  ? [Tail, ...FlipTable<Head>]
  : [];
