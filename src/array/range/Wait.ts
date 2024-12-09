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

type IncrementHelper<
  Current extends number,
  Target extends number,
  Result extends number[] = [],
  Next extends number = Add<Current, 1>
> = Current extends Target
  ? Result
  : IncrementHelper<Next, Target, [...Result, Current]>;

type IncrementRange<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Limit extends number = Subtract<End, Start>,
  Step extends number = Min<Limit, 9>,
  Next extends number = Add<Start, Step>,
  CurrentChunk extends number[] = IncrementHelper<Start, Next>
> = Start extends End
  ? Result
  : IncrementRange<Next, End, [...Result, ...CurrentChunk]>;

type FlattenChunks<
  Chunks extends number[][],
  Result extends number[] = []
> = Chunks extends [
  infer Head extends number[],
  ...infer Tail extends number[][]
]
  ? FlattenChunks<Tail, [...Result, ...Head]>
  : Result;

type ChunkRangeComponent<
  Start extends number,
  End extends number,
  Step extends number,
  ChunkSize extends number,
  Head extends number = Min<Add<Start, Step>, End>,
  Tail extends number = Min<Add<Head, ChunkSize>, End>
> = [head: Head, tail: Tail];

type ExtractChunkParts<Head extends number, Tail extends number> = [Head, Tail];

type MaxRangeLimit = 3333;

type CreateChunks<
  Start extends number,
  End extends number,
  Difference extends number = Subtract<End, Start>,
  Width extends number = Length<Difference>,
  ChunkSize extends number = Ceil<Divide<Difference, Width>>,
  List extends unknown[] = IncrementRange<0, Width>
> = {
  [Index in keyof List]: List[Index] extends number
    ? Multiply<ChunkSize, List[Index]> extends InferNumber<infer Step>
      ? ChunkRangeComponent<
          Start,
          End,
          Step,
          ChunkSize
        > extends ExtractChunkParts<infer Head, infer Tail>
        ? GreaterThan<ChunkSize, MaxRangeLimit> extends 1
          ? CreateChunks<Head, Tail>
          : [Head, Tail]
        : never
      : never
    : never;
};

// type FlattenChunkList<List extends unknown[], Result extends unknown[] = []> = {
//   [Index in keyof List]: List[Index] extends unknown[][]
//     ? FlattenChunkList<List[Index], Result>
//     : List[Index];
// }[number] extends infer Flattened
//   ? Flattened extends unknown[]
//     ? [...Result, ...Flattened]
//     : [...Result, Flattened]
//   : never;
type FlattenChunkList<List extends unknown[], Result extends unknown[] = []> = {
  [Index in keyof List]: List[Index] extends unknown[][]
    ? FlattenChunkList<List[Index], Result>
    : List[Index];
};

type ChunkRangeHelper<Chunks extends number[][]> = {
  [Index in keyof Chunks]: Chunks[Index] extends ExtractChunkParts<
    infer Start,
    infer End
  >
    ? IncrementRange<Start, End>
    : never;
};

export type Range<Start extends number, End extends number> = CreateChunks<
  Start,
  End
> extends InferArray<infer Chunks, unknown[]>
  ? FlattenChunkList<Chunks> extends InferArray<infer Flat, number[]>
    ? FlattenChunks<ChunkRangeHelper<Flat>>
    : never
  : never;

type Test = Range<-4, 5>;
//   ^?
