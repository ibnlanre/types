import { Fn, Math } from "@ibnlanre/types";

export type IsInteger<Value extends unknown> = Value extends number
  ? Math.IsInteger<Value>
  : 0;

export interface TIsInteger<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsInteger<this[0]>;
}
