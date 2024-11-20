import type { Fn, Join, Slice, Split } from "@ibnlanre/types";

export type Substring<
  Text extends string,
  Start extends number,
  End extends number
> = Join<Slice<Split<Text>, Start, End>>;

export interface TSubstring<
  Start extends number | void = void,
  End extends number | void = void,
  Text extends string | void = void
> extends Fn<{
    0: number;
    1: number;
    2: string;
  }> {
  slot: [Start, End, Text];
  data: Substring<this[2], this[0], this[1]>;
}
