import { Fn, IsNever } from "@ibnlanre/types";

export type RequireValue<Value> = Exclude<Value, undefined> extends infer Value
  ? IsNever<Value> extends 1
    ? undefined
    : Value
  : never;

export interface TRequireValue<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: RequireValue<this[0]>;
}
