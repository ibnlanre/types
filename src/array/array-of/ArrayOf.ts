/**
 * Creates a tuple (array type) of a specified length, filled with a given element type.
 *
 * Recursively constructs a tuple of length `Length`, where each item is of type `Element`.
 * Useful for type-level array generation, padding, or enforcing fixed-length constraints.
 *
 * @template Length - The desired length of the resulting tuple (must be a non-negative integer)
 * @template Element - The type of each element in the tuple
 *
 * @example
 * type FiveStrings = ArrayOf<5, string>;
 * // Expected: [string, string, string, string, string]
 *
 * type ZeroNumbers = ArrayOf<0, number>;
 * // Expected: []
 *
 * type ThreeBooleans = ArrayOf<3, boolean>;
 * // Expected: [boolean, boolean, boolean]
 *
 * type DefaultAny = ArrayOf<2>;
 * // Expected: [any, any]
 */
import type { Fn } from "@ibnlanre/types";

type ArrayOfHelper<
  Length extends number,
  Element extends unknown,
  Result extends unknown[] = []
> = Result["length"] extends Length
  ? Result
  : ArrayOfHelper<Length, Element, [Element, ...Result]>;

export type ArrayOf<
  Length extends number,
  Element extends unknown = any
> = ArrayOfHelper<Length, Element>;

/**
 * Type-level function interface for ArrayOf, enabling composition in pipelines.
 *
 * @template Length - The desired length of the resulting tuple
 * @template Element - The type of each element in the tuple
 *
 * @remarks
 * Use only for type-level function composition (Pipe, etc). For direct usage, prefer ArrayOf.
 */
export interface TArrayOf<
  Length extends number | void = void,
  Element extends unknown | void = void
> extends Fn<{
    0: number;
    1: unknown;
  }> {
  slot: [Length, Element];
  data: ArrayOf<this[0], this[1]>;
}
