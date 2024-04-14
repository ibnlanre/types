import { Fn, Locate } from "@ibnlanre/types";

type RetrieveHelper<List extends unknown, Index extends number> = List extends {
  [K in Index]: infer Head;
}
  ? Head
  : never;

export type Retrieve<List extends unknown, Index extends number = 0> = Locate<
  List,
  Index
> extends infer Position
  ? Position extends number
    ? RetrieveHelper<List, Position>
    : never
  : never;

export interface TRetrieve<
  Index extends number | void = 0,
  List extends unknown | void = void
> extends Fn<{
    0: number;
    1: unknown;
  }> {
  slot: [Index, List];
  data: Retrieve<this[1], this[0]>;
}
