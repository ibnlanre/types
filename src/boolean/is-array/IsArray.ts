import type { Fn } from "@ibnlanre/types";

export type IsArray<Value extends unknown> = Value extends Value
  ? Value extends unknown[]
    ? 1
    : 0
  : never;

export interface TIsArray<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsArray<this[0]>;
}
