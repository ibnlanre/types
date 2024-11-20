import type { Fn, Math } from "@ibnlanre/types";

export type IsOdd<Value extends number> = Math.IsOdd<Value>;

export interface TIsOdd<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsOdd<this[0]>;
}
