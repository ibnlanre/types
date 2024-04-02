import { Fn } from "@ibnlanre/types";

type ArrayOfHelper<
  Length extends number,
  Element extends unknown,
  Result extends unknown[] = []
> = Result["length"] extends Length
  ? Result
  : ArrayOfHelper<Length, Element, [Element, ...Result]>;

export type ArrayOf<
  Length extends number,
  Element extends unknown = any
> = ArrayOfHelper<Length, Element>;

export interface TArrayOf<
  Length extends number | void = void,
  Element extends unknown | void = void
> extends Fn<{
    0: number;
    1: unknown;
  }> {
  slot: [Length, Element];
  data: ArrayOf<this[0], this[1]>;
}
