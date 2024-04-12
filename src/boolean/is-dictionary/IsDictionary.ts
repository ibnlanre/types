import { Dictionary, Fn } from "@ibnlanre/types";

export type IsDictionary<Value extends unknown> = Value extends Value
  ? Value extends Dictionary
    ? 1
    : 0
  : never;

export interface TIsDictionary<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsDictionary<this[0]>;
}
