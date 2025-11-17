/**
 * Concatenates two tuple (array) types into a single tuple type.
 *
 * This utility performs a type-level concatenation of `Left` and `Right`, preserving
 * tuple literal types and the order of elements. Useful for building and composing
 * arrays at the type level.
 *
 * @template Left - The left tuple to concatenate
 * @template Right - The right tuple to concatenate
 *
 * @example
 * type Joined = Concat<[1, 2], [3, 4]>;
 * // Expected: [1, 2, 3, 4]
 *
 * type ConcatWithEmpty = Concat<[1], []>;
 * // Expected: [1]
 *
 * type EmptyWithRight = Concat<[], ["a"]>;
 * // Expected: ["a"]
 */
import type { Fn } from "@ibnlanre/types";

export type Concat<Left extends unknown[], Right extends unknown[]> = [
  ...Left,
  ...Right
];

/**
 * Type-level function interface for Concat, enabling composition in pipelines.
 *
 * @template Right - The right tuple to concatenate
 * @template Left - The left tuple to concatenate
 */
export interface TConcat<
  Right extends unknown[] | void = void,
  Left extends unknown[] | void = void
> extends Fn<{
    0: unknown[];
    1: unknown[];
  }> {
  slot: [Right, Left];
  data: Concat<this[1], this[0]>;
}
