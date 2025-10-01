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
  Step extends number,
  Increment extends number = Multiply<ChunkSize, Value>,
  AddToStart extends number = Add<Start, Increment>,
  Head extends number = Min<AddToStart, End>,
  StepValue extends number = Multiply<ChunkSize, Step>,
  AddToHead extends number = Add<Head, StepValue>,
  Tail extends number = Min<AddToHead, End>
> = Enumerate<Head, Tail, Step>;

type Chunk<
  Start extends number,
  End extends number,
  Step extends number,
  Difference extends number = Subtract<End, Start>,
  Width extends number = Length<Difference>,
  List extends unknown[] = Enumerate<0, Width>,
  Result extends number = Divide<Difference, Width>,
  ChunkSize extends number = Ceil<Result>
> = {
  [Index in keyof List]: List[Index] extends number
    ? ChunkHelper<Start, End, List[Index], ChunkSize, Step>
    : never;
};

type RangeHelper<
  Start extends number,
  End extends number,
  Step extends number
> = Chunk<Start, End, Step> extends InferArray<infer Chunks, number[]>
  ? Flat<Chunks>
  : never;

export type Range<
  From extends number,
  To extends number,
  Step extends number = 1
> = RangeHelper<From, To, Step>;

export interface TRange<
  From extends number | void = void,
  To extends number | void = void,
  Step extends number | void = void
> extends Fn<{
    0: number;
    1: number;
    2: number;
  }> {
  slot: [From, To, Step];
  data: Range<this[0], this[1], this[2]>;
}
