import type { Fn, Size, Subtract } from "@ibnlanre/types";

export type Slice<
  List extends unknown[],
  Start extends number = 0,
  End extends number = Size<List>
> = List extends [infer First, ...infer Rest]
  ? Start extends 0
    ? End extends 0
      ? []
      : [First, ...Slice<Rest, 0, Subtract<End, 1>>]
    : Slice<Rest, Subtract<Start, 1>, Subtract<End, 1>>
  : [];

export interface TSlice<
  Start extends number | void = void,
  End extends number | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: number;
    1: number;
    2: unknown[];
  }> {
  slot: [Start, End, List];
  data: Slice<this[2], this[0], this[1]>;
}
