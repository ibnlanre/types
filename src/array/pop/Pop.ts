import { Fn } from "@ibnlanre/types";

export type Pop<List extends unknown[]> = List extends [
  ...unknown[],
  infer Element extends List[number]
]
  ? Element
  : never;

export interface TPop<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Pop<this[0]>;
}
