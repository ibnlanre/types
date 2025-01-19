import type {
  Add,
  Ceil,
  Divide,
  Enumerate,
  Equal,
  Fn,
  GreaterThan,
  InferArray,
  Length,
  Min,
  Multiply,
  Push,
  Subtract,
} from "@ibnlanre/types";

type TailNumberArray<Head extends number[], Rest extends number[][]> = [
  Head,
  ...Rest
];

type TailUnknownArray<Head extends unknown[], Rest extends unknown[]> = [
  Head,
  ...Rest
];

type Flat<
  List extends unknown[],
  Result extends number[][] = []
> = List extends []
  ? Result
  : List extends TailNumberArray<infer Head, infer Rest>
  ? Flat<Rest, Push<Result, Head>>
  : List extends TailUnknownArray<infer Head, infer Rest>
  ? Flat<Rest, Flat<Head, Result>>
  : never;

type ChunkComponent<
  Start extends number,
  End extends number,
  Value extends number,
  ChunkSize extends number,
  Increment extends number = Multiply<ChunkSize, Value>,
  Begin extends number = Add<Start, Increment>,
  Head extends number = Min<Begin, End>,
  Finish extends number = Add<Head, ChunkSize>,
  Tail extends number = Min<Finish, End>,
  Difference extends number = Subtract<Tail, Head>
> = GreaterThan<Difference, 999> extends 1
  ? ChunkHelper<Head, Tail>
  : [Head, Tail];

type ChunkHelper<
  Start extends number,
  End extends number,
  Difference extends number = Subtract<End, Start>,
  Width extends number = Length<Difference>,
  List extends unknown[] = Enumerate<0, Width>,
  Result extends number = Divide<Difference, Width>,
  ChunkSize extends number = Ceil<Result>
> = {
  [Index in keyof List]: List[Index] extends number
    ? ChunkComponent<Start, End, List[Index], ChunkSize>
    : never;
} extends InferArray<infer Chunks, unknown[]>
  ? Chunks
  : never;

type ChunkState<
  Start extends number,
  End extends number,
  Result extends unknown[] = ChunkHelper<Start, End>,
  List extends number[][] = Flat<Result>
> = List;

export type Chunk<Start extends number, End extends number> = Equal<
  Start,
  End
> extends 1
  ? []
  : GreaterThan<Start, End> extends 1
  ? ChunkState<End, Start>
  : ChunkState<Start, End>;

export interface TChunk<
  Start extends number | void = void,
  End extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [End, Start];
  data: Chunk<this[1], this[0]>;
}
