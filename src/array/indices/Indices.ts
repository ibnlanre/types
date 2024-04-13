import { Fn, UnionToTuple } from "@ibnlanre/types";

export type Indices<
  List extends unknown[],
  Result extends "Tuple" | "Union" = "Union"
> = Exclude<keyof List, keyof unknown[]> extends `${infer Index extends number}`
  ? Result extends "Tuple"
    ? UnionToTuple<Index>
    : Index
  : never;

export interface TIndices<
  Result extends "Tuple" | "Union" | void = "Union",
  List extends unknown[] | void = void
> extends Fn<{
    0: "Tuple" | "Union";
    1: unknown[];
  }> {
  slot: [Result, List];
  data: Indices<this[1], this[0]>;
}
