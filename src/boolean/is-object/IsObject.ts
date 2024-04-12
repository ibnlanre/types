import { Fn } from "@ibnlanre/types";

export type IsObject<Value extends unknown> = Value extends Value
  ? Value extends Record<PropertyKey, any>
    ? 1
    : 0
  : never;

export interface TIsObject<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsObject<this[0]>;
}
