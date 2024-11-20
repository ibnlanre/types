import type { Fn } from "@ibnlanre/types";

export type Head<List extends unknown[]> = List extends [
  ...infer Head extends List[number][],
  unknown
]
  ? Head
  : never;

export interface THead<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Head<this[0]>;
}
