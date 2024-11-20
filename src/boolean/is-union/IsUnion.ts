import type { Fn, UnionToTuple } from "@ibnlanre/types";

export type IsUnion<Value> = [Value] extends UnionToTuple<Value> ? 0 : 1;

export interface TIsUnion<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsUnion<this[0]>;
}
