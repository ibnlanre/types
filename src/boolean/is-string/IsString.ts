import type { Fn } from "@ibnlanre/types";

export type IsString<Value extends unknown> = Value extends Value
  ? string extends Value
    ? 1
    : Value extends string
    ? 1
    : 0
  : never;

export interface TIsString<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsString<this[0]>;
}
