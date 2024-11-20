import type { Fn, Locate } from "@ibnlanre/types";

export type ValueAt<List extends any[], Index extends number> = Locate<
  List,
  Index
> extends infer Position
  ? Position extends number
    ? List[Position]
    : never
  : never;

export interface TValueAt<
  Index extends number | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: number;
    1: unknown[];
  }> {
  slot: [Index, List];
  data: ValueAt<this[1], this[0]>;
}
