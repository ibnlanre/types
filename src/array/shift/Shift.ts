import type { Fn } from "@ibnlanre/types";

export type Shift<List extends unknown[]> = List extends [
  infer Element extends List[number],
  ...unknown[]
]
  ? Element
  : never;

export interface TShift<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Shift<this[0]>;
}
