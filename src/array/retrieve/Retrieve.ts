import { Fn } from "@ibnlanre/types";

export type Retrieve<
  List extends unknown,
  Index extends number = 0
> = List extends {
  [K in Index]: infer Head;
}
  ? Head
  : never;

export interface TRetrieve<
  Index extends number | void = void,
  List extends unknown | void = void
> extends Fn<{
    0: number;
    1: unknown;
  }> {
  slot: [Index, List];
  data: Retrieve<this[1], this[0]>;
}
