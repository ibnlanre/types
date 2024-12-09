import type {
  Add,
  Ceil,
  Concat,
  Divide,
  Fn,
  InferArray,
  InferNumber,
  Length,
  Min,
  Multiply,
  Push,
  Subtract,
} from "@ibnlanre/types";

type ChunkComponent<
  Start extends number,
  End extends number,
  Increment extends number,
  ChunkSize extends number,
  Head extends number = Min<Add<Start, Increment>, End>,
  Tail extends number = Min<Add<Head, ChunkSize>, End>
> = [head: Head, tail: Tail];

type InferChunkParts<Head extends number, Tail extends number> = [
  head: Head,
  tail: Tail
];

type TailNumberArray<Head extends number[], Rest extends unknown[]> = [
  Head,
  ...Rest
];

type EnumerateHelper<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Next extends number = Add<Start, 1>
> = Start extends End
  ? Result
  : EnumerateHelper<Next, End, Push<Result, Start>>;

type Enumerate<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Limit extends number = Subtract<End, Start>,
  Increment extends number = Min<Limit, 9>,
  Next extends number = Add<Start, Increment>,
  LastRow extends number[] = EnumerateHelper<Start, Next>
> = Start extends End ? Result : Enumerate<Next, End, Concat<Result, LastRow>>;

type GenerateChunks<
  Start extends number,
  End extends number,
  Difference extends number = Subtract<End, Start>,
  Width extends number = Length<Difference>,
  ChunkSize extends number = Ceil<Divide<Difference, Width>>,
  List extends unknown[] = EnumerateHelper<0, Width>
> = {
  [Index in keyof List]: List[Index] extends number
    ? Multiply<ChunkSize, List[Index]> extends InferNumber<infer Increment>
      ? ChunkComponent<
          Start,
          End,
          Increment,
          ChunkSize
        > extends InferChunkParts<infer Head, infer Tail>
        ? Enumerate<Head, Tail>
        : never
      : never
    : never;
};

type FlatChunk<
  List extends unknown[],
  Result extends number[] = []
> = List extends TailNumberArray<infer Head, infer Rest>
  ? FlatChunk<Rest, Concat<Result, Head>>
  : Result;

export type Range<From extends number, To extends number> = GenerateChunks<
  From,
  To
> extends InferArray<infer Chunk, number[]>
  ? FlatChunk<Chunk>
  : never;

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
