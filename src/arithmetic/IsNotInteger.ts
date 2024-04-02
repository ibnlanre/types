import { Fn } from "@ibnlanre/types";
import { IsNotInt } from "ts-arithmetic";

export type IsNotInteger<Number extends unknown> = Number extends number
  ? IsNotInt<Number>
  : 0;

export interface TIsNotInteger<Number extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Number];
  data: IsNotInteger<this[0]>;
}
