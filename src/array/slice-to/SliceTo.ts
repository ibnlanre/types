import { ArrayOf, Fn, Size } from "@ibnlanre/types";
import { Gt, Lt, Subtract } from "ts-arithmetic";

type SliceToHelper<List extends unknown[], End extends number> = List extends [
  ...infer Rest,
  ...ArrayOf<Subtract<Size<List>, End>>
]
  ? Rest
  : never;

export type SliceTo<
  List extends unknown[],
  End extends number = Size<List>
> = Gt<End, Size<List>> extends 1
  ? SliceToHelper<List, Size<List>>
  : Lt<End, 0> extends 1
  ? []
  : SliceToHelper<List, End>;

export interface TSliceTo<
  To extends number | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: number;
    1: unknown[];
  }> {
  slot: [To, List];
  data: SliceTo<this[1], this[0]>;
}
