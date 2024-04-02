import { Fn, IndexAt } from "@ibnlanre/types";

export type ValueAt<List extends any[], Index extends number> = IndexAt<
  List,
  Index
> extends infer Index
  ? Index extends number
    ? List[Index]
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
