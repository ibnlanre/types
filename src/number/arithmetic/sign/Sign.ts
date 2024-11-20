import type { Fn, Math } from "@ibnlanre/types";

/**
 * Signum representation of a number.
 *
 * @description
 * The signum function of a number is a mathematical function that extracts the sign of a real number.
 *
 * @summary
 * - If the number is negative, the signum is -1.
 * - If the number is positive, the signum is 1.
 * - If the number is zero, the signum is 0.
 *
 * @param Number The number to get the signum of.
 * @returns The signum of the number.
 */
export type Sign<Number extends number> = Math.Signum<Number>;

export interface TSign<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: Sign<this[0]>;
}
