import { Fn } from "@ibnlanre/types";
import { Compare } from "ts-arithmetic";

/**
 * Compares two numbers.
 *
 * @description
 * The result of the comparison is:
 * - 0 if the two numbers are equal.
 * - 1 if the first number is greater than the second number.
 * - -1 if the first number is less than the second number.
 *
 * @param Left - The first number to compare.
 * @param Right - The second number to compare.
 *
 * @returns The result of the comparison.
 */
export interface TCompare<
  Left extends number | void = void,
  Right extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Left, Right];
  data: Compare<this[0], this[1]>;
}

export { Compare };
