import { Apply, Call, Fn } from "@ibnlanre/types";

export type Take<
  List extends unknown[],
  Value extends unknown = unknown
> = List extends [infer Head, ...infer Rest]
  ? [Head] extends [Value]
    ? [Head, ...Take<Rest, Value>]
    : Take<Rest, Value>
  : List;

export interface TTake<
  Value extends unknown | void = unknown,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Value, List];
  data: Take<this[1], this[0]>;
}

type Test = Apply<TTake, [[1, 3, "fafda"]]>;
