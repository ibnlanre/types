import type { Fn } from "@ibnlanre/types";

export type Size<List extends any[]> = List extends { length: infer L }
  ? L
  : never;

export interface TSize<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Size<this[0]>;
}
