import type { ArrayOf, Fn, GreaterThan, LessThan, Size } from "@ibnlanre/types";

type SliceFromHelper<
  List extends unknown[],
  Start extends number
> = List extends [...ArrayOf<Start>, ...infer Rest] ? Rest : never;

export type SliceFrom<
  List extends unknown[],
  Start extends number
> = GreaterThan<Start, Size<List>> extends 1
  ? SliceFromHelper<List, Size<List>>
  : LessThan<Start, 0> extends 1
  ? SliceFromHelper<List, 0>
  : SliceFromHelper<List, Start>;

export interface TSliceFrom<
  Start extends number | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: number;
    1: unknown[];
  }> {
  slot: [Start, List];
  data: SliceFrom<this[1], this[0]>;
}
