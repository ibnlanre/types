import { Fn } from "@ibnlanre/types";

export type Tail<T extends any[]> = T extends [any, ...infer Tail]
  ? Tail
  : never;

export interface TTail<T extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [T];
  data: Tail<this[0]>;
}
