import { Fn } from "@ibnlanre/types";

export type Shift<List extends any[]> = List extends [any, ...infer Rest]
  ? Rest
  : never;

export interface TShift<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Shift<this[0]>;
}
