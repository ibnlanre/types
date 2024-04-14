import { Fn, Math } from "@ibnlanre/types";

/**
 * Compares two numbers.
 *
 * @description
 * The result of the comparison is:
 * - 0 if the two numbers are equal.
 * - 1 if the first number is greater than the second number.
 * - -1 if the first number is less than the second number.
 *
 * @param Left - The left side of the comparison.
 * @param Right - The right side of the comparison.
 *
 * @returns The result of the comparison.
 */
export type Compare<Left extends number, Right extends number> = Math.Compare<
  Left,
  Right
>;

/**
 * Compares two numbers.
 *
 * @description
 * The result of the comparison is:
 * - 0 if the two numbers are equal.
 * - 1 if the first number is greater than the second number.
 * - -1 if the first number is less than the second number.
 *
 * @param Right - The right side of the comparison.
 * @param Left - The left side of the comparison.
 *
 * @returns The result of the comparison.
 */
export interface TCompare<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Compare<this[1], this[0]>;
}
