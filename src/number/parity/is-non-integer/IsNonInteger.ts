import type { Fn, Math } from "@ibnlanre/types";

export type IsNonInteger<Value extends unknown> = Value extends number
  ? Math.IsNonInteger<Value>
  : 0;

export interface TIsNonInteger<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsNonInteger<this[0]>;
}
