import type { Fn, LastOfUnion } from "@ibnlanre/types";

type UnionToTupleHelper<
  Union extends unknown,
  Tail = LastOfUnion<Union>,
  Rest = Exclude<Union, Tail>
> = [Tail] extends [never] ? [] : [...UnionToTupleHelper<Rest>, Tail];

export type UnionToTuple<Union extends unknown> = UnionToTupleHelper<Union>;

export interface TUnionToTuple<Union extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Union];
  data: UnionToTuple<this[0]>;
}
