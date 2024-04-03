import { Fn } from "@ibnlanre/types";

/*
 * Ternary type that checks if a type is void
 * @param T - The type to check if it is void
 *
 * @summary
 * Note that void extends unknown, so if T extends void, then T extends unknown
 * However, if T extends unknown, it does not mean that T extends void
 */
export type IsVoid<T> = [T] extends [void] ? 1 : 0;

export interface TIsVoid<T extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [T];
  data: IsVoid<this[0]>;
}
