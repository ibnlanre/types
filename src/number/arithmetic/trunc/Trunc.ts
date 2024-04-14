import { Fn, Math } from "@ibnlanre/types";

export type Trunc<Value extends number> = Math.Subtract<
  Value,
  Math.Mod<Value, 1>
>;

export interface TTrunc<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: Trunc<this[0]>;
}
