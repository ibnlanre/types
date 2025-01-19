import type {
  Add,
  Ceil,
  Concat,
  Divide,
  Enumerate,
  Fn,
  InferArray,
  Length,
  Min,
  Multiply,
  Subtract,
} from "@ibnlanre/types";

type TailNumberArray<Head extends number[], Rest extends number[][]> = [
  Head,
  ...Rest
];

type Flat<
  List extends number[][],
  Result extends number[] = []
> = List extends []
  ? Result
  : List extends TailNumberArray<infer Head, infer Rest>
  ? Flat<Rest, Concat<Result, Head>>
  : never;

type ChunkHelper<
  Start extends number,
  End extends number,
  Value extends number,
  ChunkSize extends number,
  Increment extends number = Multiply<ChunkSize, Value>,
  Head extends number = Min<Add<Start, Increment>, End>,
  Tail extends number = Min<Add<Head, ChunkSize>, End>
> = Enumerate<Head, Tail>;

type Chunk<
  Start extends number,
  End extends number,
  Difference extends number = Subtract<End, Start>,
  Width extends number = Length<Difference>,
  List extends number[] = Enumerate<0, Width>,
  Result extends number = Divide<Difference, Width>,
  ChunkSize extends number = Ceil<Result>
> = {
  [Index in keyof List]: List[Index] extends number
    ? ChunkHelper<Start, End, List[Index], ChunkSize>
    : never;
};

type RangeHelper<Start extends number, End extends number> = Chunk<
  Start,
  End
> extends InferArray<infer Chunks, number[]>
  ? Flat<Chunks>
  : never;

export type Range<From extends number, To extends number> = RangeHelper<
  From,
  To
>;

export interface TRange<
  From extends number | void = void,
  To extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [From, To];
  data: Range<this[0], this[1]>;
}
