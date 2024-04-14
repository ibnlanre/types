import { Fn, IsNever } from "@ibnlanre/types";

export type Take<
  Collection extends unknown,
  Value extends unknown = never
> = IsNever<Value> extends 1
  ? Collection
  : Value extends Collection
  ? Extract<Collection, Value>
  : Value;

export interface TTake<
  Value extends unknown | void = unknown,
  Collection extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Value, Collection];
  data: Take<this[1], this[0]>;
}
