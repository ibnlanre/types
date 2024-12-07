import type { Digit } from "@ibnlanre/types";

export type LastRow<Table extends Digit[][]> = Table extends [
  ...Digit[][],
  infer LastRow
]
  ? LastRow
  : never;
