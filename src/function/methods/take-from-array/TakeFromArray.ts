import { Fn, IsNever } from "@ibnlanre/types";

export type TakeFromArray<
  List extends unknown[],
  Value extends unknown = never
> = IsNever<Value> extends 1
  ? List
  : List extends [infer Head, ...infer Rest]
  ? [Value] extends [Head]
    ? TakeFromArray<Rest, Value> extends infer Rest
      ? Rest extends unknown[]
        ? [Head, ...Rest]
        : [Head, Rest]
      : never
    : TakeFromArray<Rest, Value>
  : List;

export interface TTakeFromArray<
  Value extends unknown | void = never,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Value, List];
  data: TakeFromArray<this[1], this[0]>;
}
