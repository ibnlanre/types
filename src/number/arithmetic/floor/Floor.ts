import { Fn, Math } from "@ibnlanre/types";

export type Floor<Value extends number> = Math.Floor<Value>;

export interface TFloor<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: Floor<this[0]>;
}
