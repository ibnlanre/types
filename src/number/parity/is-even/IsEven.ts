import type { Fn, Math } from "@ibnlanre/types";

/**
 * Checks if a number is even.
 *
 * @param Value The number to check if it is even.
 *
 * @returns
 * `1` if the number is even, `0` otherwise.
 */
export type IsEven<Value extends number> = Math.IsEven<Value>;

/**
 * Checks if a number is even.
 *
 * @param Value The number to check if it is even.
 *
 * @returns
 * `1` if the number is even, `0` otherwise.
 */
export interface TIsEven<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsEven<this[0]>;
}
