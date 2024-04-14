import { Drop, Fn, Insert, Locate, Retrieve, Size } from "@ibnlanre/types";

type PivotHelper<
  List extends unknown[],
  Value extends unknown,
  Result extends unknown[][] = []
> = Size<Result> extends Size<List>
  ? [...Result, Insert<List, Size<Result>, Value>]
  : PivotHelper<List, Value, [...Result, Insert<List, Size<Result>, Value>]>;

export type Pivot<List extends unknown[], Axis extends number = 0> = Locate<
  List,
  Axis
> extends infer Index
  ? Index extends number
    ? PivotHelper<Drop<List, Index>, Retrieve<List, Index>>
    : never
  : never;

export interface TPivot<
  Head extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Head, List];
  data: Pivot<this[1], this[0]>;
}
