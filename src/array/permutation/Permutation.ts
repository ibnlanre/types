import { Anchor, Fn, Reduce, RotateLeft, Size } from "@ibnlanre/types";

type PermutationHelper<
  List extends unknown[],
  Result extends unknown[][] = []
> = Size<Result> extends Size<List>
  ? Reduce<Result>
  : PermutationHelper<RotateLeft<List>, [...Result, Anchor<List>]>;

export type Permutation<List extends unknown[]> = Size<List> extends 1
  ? Reduce<[[List]]>
  : PermutationHelper<List>;

export interface TPermutation<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Permutation<this[0]>;
}
