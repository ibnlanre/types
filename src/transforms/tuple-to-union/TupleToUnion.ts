import { Fn } from "@ibnlanre/types";

export type TupleToUnion<Tuple extends unknown[]> = Tuple[number];

export interface TTupleToUnion<Tuple extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [Tuple];
  data: TupleToUnion<this[0]>;
}
