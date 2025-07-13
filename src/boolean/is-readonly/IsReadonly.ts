import type { Dictionary, Fn, IsExact } from "@ibnlanre/types";

export type IsReadonly<Value> = IsExact<Readonly<Value>, Value>
export type IsReadonlyKey<T extends Dictionary, K extends keyof T> = IsExact<
  Pick<T, K>,
  Readonly<Pick<T, K>>
>;

export interface TIsReadonly<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsReadonly<this[0]>;
}

export interface TIsReadonlyKey<
  T extends Dictionary | void = void,
  K extends keyof T | void = void
> extends Fn<{
    0: Dictionary;
    1: keyof T;
  }> {
  slot: [T, K];
  data: IsReadonlyKey<this[0], this[1]>;
}