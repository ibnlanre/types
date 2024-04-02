import { Bound, Fn, Size, SliceFrom, SliceTo } from "@ibnlanre/types";
import { Subtract } from "ts-arithmetic";

export type Slice<
  List extends unknown[],
  Start extends number = 0,
  End extends number = Size<List>
> = Bound<Start, 0, Size<List>> extends infer Start
  ? Start extends number
    ? Bound<End, 0, Size<List>> extends infer End
      ? End extends number
        ? SliceTo<SliceFrom<List, Start>, Subtract<End, Start>>
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
