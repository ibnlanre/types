import { Fn } from "@ibnlanre/types";

export type RotateRight<
  List extends unknown[],
  Addendum extends unknown = never
> = List extends [...infer Rest extends unknown[], infer Tail extends unknown]
  ? [[Addendum] extends [never] ? Tail : Addendum, ...Rest]
  : never;

export interface TRotateRight<
  Addendum extends unknown | void = never,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Addendum, List];
  data: RotateRight<this[1], this[0]>;
}
