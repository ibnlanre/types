import type {
  Add,
  Ceil,
  Concat,
  Divide,
  GreaterThan,
  InferArray,
  InferNumber,
  Length,
  Min,
  Multiply,
  Subtract,
  Unshift,
} from "@ibnlanre/types";

type EnumerateHelper<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Next extends number = Add<Start, 1>
> = Start extends End ? Result : EnumerateHelper<Next, End, [...Result, Start]>;

type Enumerate<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Limit extends number = Subtract<End, Start>,
  Increment extends number = Min<Limit, 9>,
  Next extends number = Add<Start, Increment>,
  LastRow extends number[] = EnumerateHelper<Start, Next>
> = Start extends End ? Result : Enumerate<Next, End, [...Result, ...LastRow]>;

type RangeHelper<Start extends number, End extends number> = Enumerate<
  Start,
  End
>;

type FlattenArray<
  Chunk extends number[][],
  Result extends number[] = []
> = Chunk extends [
  infer Head extends number[],
  ...infer Tail extends number[][]
]
  ? FlattenArray<Tail, [...Result, ...Head]>
  : Result;

type ChunkComponent<
  Start extends number,
  End extends number,
  Increment extends number,
  ChunkSize extends number,
  Head extends number = Min<Add<Start, Increment>, End>,
  Tail extends number = Min<Add<Head, ChunkSize>, End>
> = [head: Head, tail: Tail];

type InferChunkParts<Head extends number, Tail extends number> = [Head, Tail];

type TRangeLimit = 8500;

type GenerateChunks<
  Start extends number,
  End extends number,
  Difference extends number = Subtract<End, Start>,
  Width extends number = Length<Difference>,
  ChunkSize extends number = Ceil<Divide<Difference, Width>>,
  List extends unknown[] = RangeHelper<0, Width>
> = {
  [Index in keyof List]: List[Index] extends number
    ? Multiply<ChunkSize, List[Index]> extends InferNumber<infer Increment>
      ? ChunkComponent<
          Start,
          End,
          Increment,
          ChunkSize
        > extends InferChunkParts<infer Head, infer Tail>
        ? GreaterThan<ChunkSize, TRangeLimit> extends 1
          ? GenerateChunks<Head, Tail>
          : [Head, Tail]
        : never
      : never
    : never;
};

type FlatChunk<List extends unknown[]> = List extends [
  infer Head,
  ...infer Rest
]
  ? Head extends unknown[][]
    ? Concat<FlatChunk<Head>, FlatChunk<Rest>>
    : Unshift<FlatChunk<Rest>, Head>
  : List;

type ChunkHelper<Chunks extends number[][]> = FlattenArray<{
  [Index in keyof Chunks]: Chunks[Index] extends InferChunkParts<
    infer Start,
    infer End
  >
    ? RangeHelper<Start, End>
    : never;
}>;

export type Range<Start extends number, End extends number> = GenerateChunks<
  Start,
  End
> extends InferArray<infer Chunks, unknown[]>
  ? FlatChunk<Chunks> extends InferArray<infer Flat, number[]>
    ? ChunkHelper<Flat>
    : never
  : never;

type Test = Range<-4, 5>;
//   ^?
type Test2 = Range<0, 2000>;
//   ^?
