import { Concat, Decrement, Fn, Push, Unshift } from "@ibnlanre/types";

type InfiniteFlat<
  List extends unknown[],
  Result extends unknown[] = []
> = List extends [infer Head extends unknown[], ...infer Rest]
  ? InfiniteFlat<Rest, Concat<Result, Head>>
  : List extends [infer Head, ...infer Rest]
  ? InfiniteFlat<Rest, Push<Result, Head>>
  : Result;

type FiniteFlat<
  List extends unknown[],
  Depth extends number = 0
> = Depth extends 0
  ? List
  : List extends [infer Head, ...infer Rest]
  ? Head extends unknown[]
    ? Concat<FiniteFlat<Head, Decrement<Depth>>, FiniteFlat<Rest, Depth>>
    : Unshift<FiniteFlat<Rest, Depth>, Head>
  : List;

export type Flat<
  List extends unknown[],
  Depth extends number = -1
> = Depth extends -1 ? InfiniteFlat<List> : FiniteFlat<List, Depth>;

export interface TFlat<
  Depth extends number | void = -1,
  List extends unknown[] | void = void
> extends Fn<{
    0: number;
    1: unknown[];
  }> {
  slot: [Depth, List];
  data: Flat<this[1], this[0]>;
}
