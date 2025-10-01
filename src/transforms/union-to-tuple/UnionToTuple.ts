import type { Flat, Fn, LastOfUnion, Size } from "@ibnlanre/types";

type UnionToTupleHelper<
  Union,
  ChunkSize extends number = 999,
  Current extends unknown[] = [],
  Result extends unknown[][] = []
> = Size<Current> extends ChunkSize
  ? UnionToTupleHelper<Union, ChunkSize, [], [Current, ...Result]>
  : [Union] extends [never]
  ? [Current, ...Result]
  : LastOfUnion<Union> extends infer Last
  ? UnionToTupleHelper<
      Exclude<Union, Last>,
      ChunkSize,
      [Last, ...Current],
      Result
    >
  : Result;

export type UnionToTuple<Union> = Flat<UnionToTupleHelper<Union>>;

export interface TUnionToTuple<Union extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Union];
  data: UnionToTuple<this[0]>;
}
