import { Fn } from "@ibnlanre/types";

export type Head<List extends any[]> = List extends [infer Head, ...any[]]
  ? Head
  : never;

export interface THead<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Head<this[0]>;
}
