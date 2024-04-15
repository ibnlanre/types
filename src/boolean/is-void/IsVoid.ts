import { And, Fn } from "@ibnlanre/types";

type UnknownHelper<T> = [T] extends [void] ? 1 : 0;
type NeverHelper<T> = [void] extends [T] ? 1 : 0;

/*
 * Ternary type that checks if a type is void
 * @param T - The type to check if it is void
 *
 * @summary
 * Note that void extends unknown, so if T extends void, then T extends unknown
 * However, if T extends unknown, it does not mean that T extends void
 */
export type IsVoid<T> = And<UnknownHelper<T>, NeverHelper<T>>;

export interface TIsVoid<T extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [T];
  data: IsVoid<this[0]>;
}
