import { Fn } from "@ibnlanre/types";

export type Push<List extends any[], Element> = [...List, Element];

export interface TPush<
  Element extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Element, List];
  data: Push<this[1], this[0]>;
}
