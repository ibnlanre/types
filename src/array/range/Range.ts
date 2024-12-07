import type { Add, Fn, Min, Subtract } from "@ibnlanre/types";

type Enumerate<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Next extends number = Add<Start, 1>
> = Start extends End ? Result : Enumerate<Next, End, [...Result, Start]>;

type RangeHelper<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Limit extends number = Subtract<End, Start>,
  Increment extends number = Min<Limit, 9>,
  Next extends number = Add<Start, Increment>,
  LastRow extends number[] = Enumerate<Start, Next>
> = Start extends End
  ? [...Result, End]
  : RangeHelper<Next, End, [...Result, ...LastRow]>;

export type Range<Start extends number, End extends number> = RangeHelper<
  Start,
  End
>;

export interface TRange<
  From extends number | void = void,
  To extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [From, To];
  data: Range<this[0], this[1]>;
}
