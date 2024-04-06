import { Fn } from "@ibnlanre/types";
import { And, Bit } from "ts-arithmetic";

/**
 * Performs a bitwise AND operation on two numbers.
 *
 * @param Left - The first number to AND.
 * @param Right - The second number to AND.
 *
 * @returns The result of the AND operation.
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

export { And };
