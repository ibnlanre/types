import { Fn } from "@ibnlanre/types";
import { IsNotInt } from "ts-arithmetic";

export type IsNotInteger<Value extends unknown> = Value extends number
  ? IsNotInt<Value>
  : 0;

export interface TIsNotInteger<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsNotInteger<this[0]>;
}
