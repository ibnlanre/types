import { Fn } from "@ibnlanre/types";

export type IsNumber<Value extends unknown> = Value extends Value
  ? Value extends number
    ? 1
    : number extends Value
    ? 1
    : 0
  : never;

export interface TIsNumber<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsNumber<this[0]>;
}
