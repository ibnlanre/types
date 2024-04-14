import { Clamp, Fn, Size, SliceFrom, SliceTo, Subtract } from "@ibnlanre/types";

export type Slice<
  List extends unknown[],
  Start extends number = 0,
  End extends number = Size<List>
> = Clamp<Start, 0, Size<List>> extends infer Starting
  ? Starting extends number
    ? Clamp<End, 0, Size<List>> extends infer Ending
      ? Ending extends number
        ? SliceTo<SliceFrom<List, Starting>, Subtract<Ending, Starting>>
        : never
      : never
    : never
  : never;

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
