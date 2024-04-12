import { Bit, Fn } from "@ibnlanre/types";

type XorHelper = Bit.FourBitSquareMatrix<[0, 1, 1, 0]>;

/**
 * A type representing the result of a bitwise XOR operation.
 *
 * @param Left - The first bit to XOR.
 * @param Right - The second bit to XOR.
 *
 * @returns The result of the XOR operation.
 *
 * @example
 * ```ts
 * import { Xor } from "@ibnlanre/types";
 *
 * type Test = Xor<0, 1>;
 * //   ^? 1
 * ```
 */
export type Xor<Left extends Bit, Right extends Bit> = XorHelper[Left][Right];

/**
 * Performs a bitwise XOR operation on two numbers.
 *
 * @param Left - The first number to XOR.
 * @param Right - The second number to XOR.
 *
 * @returns The result of the XOR operation.
 *
 * @example
 * ```ts
 * import { Apply, TXor } from "@ibnlanre/types";
 *
 * type Test = Apply<TXor, [0, 1]>;
 * //   ^? 1
 * ```
 */
export interface TXor<
  Right extends Bit | void = void,
  Left extends Bit | void = void
> extends Fn<{
    0: Bit;
    1: Bit;
  }> {
  slot: [Right, Left];
  data: Xor<this[1], this[0]>;
}
