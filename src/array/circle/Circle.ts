/**
 * Generates all rotations of an array by rotating it left progressively.
 *
 * Creates an array of arrays where each element is a left rotation of the input list.
 * The result contains all possible circular rotations, useful for pattern matching,
 * cycle detection, or generating all rotational variants of a sequence.
 *
 * @template List - The input array to rotate
 *
 * @example
 * type Rotations = Circle<[1, 2, 3]>;
 * // Expected: [[1, 2, 3], [2, 3, 1], [3, 1, 2]]
 *
 * type SingleRotation = Circle<["a"]>;
 * // Expected: [["a"]]
 *
 * type EmptyRotation = Circle<[]>;
 * // Expected: []
 *
 * type TwoElements = Circle<[true, false]>;
 * // Expected: [[true, false], [false, true]]
 */
import type { Fn, RotateLeft, Size } from "@ibnlanre/types";

export type CircleStructure<List extends unknown[][]> = [...circle: List];

export type Circle<
  List extends unknown[],
  Result extends unknown[][] = []
> = Size<Result> extends Size<List>
  ? Result
  : Circle<RotateLeft<List>, [...Result, List]>;

/**
 * Type-level function interface for Circle, enabling composition in pipelines.
 *
 * @template List - The input array to rotate
 *
 * @remarks
 * Use only for type-level function composition (Pipe, etc). For direct usage, prefer Circle.
 */
export interface TCircle<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [List];
  data: Circle<this[0]>;
}
