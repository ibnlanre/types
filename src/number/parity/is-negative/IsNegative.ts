import type { Fn, Math } from "@ibnlanre/types";

export type IsNegative<Value extends number> = Math.IsNegative<Value>;

export interface TIsNegative<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsNegative<this[0]>;
}
