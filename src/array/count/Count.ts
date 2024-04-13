import { Fn, Add } from "@ibnlanre/types";

export type Count<
  List extends unknown[],
  Value extends unknown
> = List extends []
  ? 0
  : List extends [infer Head, ...infer Rest]
  ? [Head] extends [Value]
    ? Add<1, Count<Rest, Value>>
    : Count<Rest, Value>
  : 0;

export interface TCount<
  Value extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Value, List];
  data: Count<this[1], this[0]>;
}
