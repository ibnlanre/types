import type { Fn, RotateLeft, Size } from "@ibnlanre/types";

export type CircleStructure<List extends unknown[][]> = [...circle: List];

export type Circle<
  List extends unknown[],
  Result extends unknown[][] = []
> = Size<Result> extends Size<List>
  ? Result
  : Circle<RotateLeft<List>, [...Result, List]>;

export interface TCircle<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [List];
  data: Circle<this[0]>;
}
