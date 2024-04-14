import { Fn, Math } from "@ibnlanre/types";

export type IsPositive<Value extends number> = Math.IsPositive<Value>;

export interface TIsPositive<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsPositive<this[0]>;
}
