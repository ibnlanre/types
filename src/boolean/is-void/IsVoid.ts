import { Fn } from "@ibnlanre/types";

export type IsVoid<T> = [void] extends [T] ? 1 : 0;

export interface TIsVoid<T extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [T];
  data: IsVoid<this[0]>;
}
