import type { Fn } from "@ibnlanre/types";

export type IsNever<Value> = [Value] extends [never] ? 1 : 0;

export interface TIsNever<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsNever<this[0]>;
}
