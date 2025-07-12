import type { Fn } from "@ibnlanre/types";

export type Includes<List extends readonly unknown[], Element> = [
  Element
] extends [List[number]]
  ? 1
  : 0;

export interface TIncludes<
  Element extends unknown | void = void,
  List extends readonly unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: readonly unknown[];
  }> {
  slot: [Element, List];
  data: Includes<this[1], this[0]>;
}
