import type { Circle, Fn, Pivot, Size, Unshift } from "@ibnlanre/types";

import type { AnchorStructure } from "../anchor";
import type { CircleStructure } from "../circle";

export type ShuffleStructure<Head extends unknown, Rest extends unknown[]> = [
  head: Head,
  ...rest: Rest
];

type ShuffleHelper<
  List extends unknown[][],
  Head extends unknown,
  Result extends unknown[] = []
> = Size<List> extends Size<Result>
  ? Result
  : List extends AnchorStructure<infer First, infer Rest>
  ? ShuffleHelper<Rest, Head, [...Result, ...Pivot<Unshift<First, Head>, 0>]>
  : Result;

export type Shuffle<List extends unknown[]> = List extends ShuffleStructure<
  infer Head,
  infer Rest
>
  ? Circle<Rest> extends CircleStructure<infer Revolution>
    ? Size<Revolution> extends 0
      ? [List]
      : ShuffleHelper<Revolution, Head>
    : never
  : [];

export interface TShuffle<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Shuffle<this[0]>;
}
