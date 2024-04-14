import { Fn, Insert, Shuffle } from "@ibnlanre/types";

export type AnchorStructure<
  List extends unknown[],
  Rest extends unknown[][]
> = [first: List, ...rest: Rest];

type AnchorHelper<
  List extends unknown[][],
  Shank extends unknown,
  Result extends unknown[] = []
> = List extends AnchorStructure<infer First, infer Rest>
  ? AnchorHelper<Rest, Shank, [...Result, Insert<First, 0, Shank>]>
  : Result;

export type Anchor<List extends unknown[]> = List extends [
  infer Shank extends unknown,
  ...infer Rest extends unknown[]
]
  ? AnchorHelper<Shuffle<Rest>, Shank>
  : List;

export interface TAnchor<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Anchor<this[0]>;
}
