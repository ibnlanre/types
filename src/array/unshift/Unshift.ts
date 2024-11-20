import type { Fn } from "@ibnlanre/types";

export type Unshift<List extends unknown[], Element> = [Element, ...List];

export interface TUnshift<
  Element extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Element, List];
  data: Unshift<this[1], this[0]>;
}
