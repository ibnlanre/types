import type { Fn } from "@ibnlanre/types";

export type IsReadonly<Value> = Readonly<Value> extends Value ? true : false;

export interface TIsReadonly<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsReadonly<this[0]>;
}
