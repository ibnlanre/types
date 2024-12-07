import type { Bit, Fn } from "@ibnlanre/types";

type AndHelper = Bit.FourBitSquareMatrix<[0, 0, 0, 1]>;

/**
 * A type representing the result of a bitwise AND operation.
 *
 * @param Left - The first bit to AND.
 * @param Right - The second bit to AND.
 *
 * @returns The result of the AND operation.
 *
 * @example
 * ```ts
 * import type { And } from "@ibnlanre/types";
 *
 * type Test = And<0, 1>;
 * //   ^? 0
 * ```
 */
export type And<Left extends Bit, Right extends Bit> = AndHelper[Left][Right];

/**
 * Performs a bitwise AND operation on two numbers.
 *
 * @param Left - The first number to AND.
 * @param Right - The second number to AND.
 *
 * @returns The result of the AND operation.
 *
 * @example
 * ```ts
 * import type { Apply, TAnd } from "@ibnlanre/types";
 *
 * type Test = Apply<TAnd, [0, 1]>;
 * //   ^? 0
 * ```
 */
export interface TAnd<
  Left extends Bit | void = void,
  Right extends Bit | void = void
> extends Fn<{
    0: Bit;
    1: Bit;
  }> {
  slot: [Left, Right];
  data: And<this[0], this[1]>;
}
