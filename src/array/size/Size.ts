import { Fn } from "@ibnlanre/types";

export type Size<List extends any[]> = List["length"];

export interface TSize<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Size<this[0]>;
}
