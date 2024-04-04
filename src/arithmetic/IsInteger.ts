import { Fn } from "@ibnlanre/types";
import { IsInt } from "ts-arithmetic";

export type IsInteger<Number extends unknown> = Number extends number
  ? IsInt<Number>
  : 0;

export interface TIsInteger<Number extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Number];
  data: IsInteger<this[0]>;
}
