import { Fn } from "@ibnlanre/types";

export type Pop<List extends any[]> = List extends [...any, infer Tail]
  ? Tail
  : never;

export interface TPop<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Pop<this[0]>;
}
