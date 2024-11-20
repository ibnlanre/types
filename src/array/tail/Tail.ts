import type { Fn } from "@ibnlanre/types";

export type Tail<List extends unknown[]> = List extends [
  unknown,
  ...infer Tail extends List[number][]
]
  ? Tail
  : never;

export interface TTail<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Tail<this[0]>;
}
