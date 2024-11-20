import type { Fn, IsNever } from "@ibnlanre/types";

export type RequireValue<Value> = Exclude<
  Value,
  undefined
> extends infer Required
  ? IsNever<Required> extends 1
    ? undefined
    : Required
  : never;

export interface TRequireValue<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: RequireValue<this[0]>;
}
