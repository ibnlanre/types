import { Concat, Fn, Push } from "@ibnlanre/types";

type FlatHelper<
  List extends unknown[],
  Result extends unknown[] = []
> = List extends [infer Head extends unknown[], ...infer Rest]
  ? FlatHelper<Rest, Concat<Result, Head>>
  : List extends [infer Head, ...infer Rest]
  ? FlatHelper<Rest, Push<Result, Head>>
  : Result;

export type Flat<List extends unknown[]> = FlatHelper<List>;

export interface TFlat<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Flat<this[0]>;
}
