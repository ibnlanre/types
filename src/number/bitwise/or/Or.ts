import type { Bit, Fn } from "@ibnlanre/types";

type OrHelper = Bit.FourBitSquareMatrix<[0, 1, 1, 1]>;

/**
 * A type representing the result of a bitwise OR operation.
 *
 * @param Left - The first bit to OR.
 * @param Right - The second bit to OR.
 *
 * @returns The result of the OR operation.
 *
 * @example
 * ```ts
 * import { Or } from "@ibnlanre/types";
 *
 * type Test = Or<0, 1>;
 * //   ^? 1
 * ```
 */
export type Or<Left extends Bit, Right extends Bit> = OrHelper[Left][Right];

/**
 * Performs a bitwise OR operation on two numbers.
 *
 * @param Left - The first number to OR.
 * @param Right - The second number to OR.
 *
 * @returns The result of the OR operation.
 *
 * @example
 * ```ts
 * import { Apply, TOr } from "@ibnlanre/types";
 *
 * type Test = Apply<TOr, [0, 1]>;
 * //   ^? 1
 * ```
 */
export interface TOr<
  Right extends Bit | void = void,
  Left extends Bit | void = void
> extends Fn<{
    Right: Bit;
    Left: Bit;
  }> {
  slot: [Right, Left];
  data: Or<this[1], this[0]>;
}
