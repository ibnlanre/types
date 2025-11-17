import type { Fn, Insert, Shuffle } from "@ibnlanre/types";

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

/**
 * Generates all permutations of nested arrays with a shank element anchored at the beginning.
 *
 * Takes the first element (shank) and generates all rotational permutations of the remaining
 * nested arrays, prepending the shank to the first nested array in each permutation.
 *
 * @template List - A tuple where the first element is the shank, followed by nested arrays
 *
 * @example
 * ```typescript
 * type Result1 = Anchor<["X", ["a"]]>;
 * // [["X", ["a"]]]
 *
 * type Result2 = Anchor<["prefix", ["a"], ["b"]]>;
 * // [["prefix", ["a"], ["b"]], ["prefix", ["b"], ["a"]]]
 *
 * type Result3 = Anchor<[0, [1], [2], [3]]>;
 * // [
 * //   [0, [1], [2], [3]],
 * //   [0, [2], [1], [3]],
 * //   [0, [2], [3], [1]],
 * //   [0, [1], [3], [2]],
 * //   [0, [3], [1], [2]],
 * //   [0, [3], [2], [1]]
 * // ]
 * ```
 */
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
