import type { Fn } from "@ibnlanre/types";

export type Reverse<List extends any[]> = List extends [
  infer Head,
  ...infer Rest
]
  ? [...Reverse<Rest>, Head]
  : [];

export interface TReverse<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Reverse<this[0]>;
}
