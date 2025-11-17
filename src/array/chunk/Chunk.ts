import type {
  Absolute,
  Add,
  Bit,
  Divide,
  Equal,
  Fn,
  GreaterThan,
  Length,
  Push,
  Subtract,
} from "@ibnlanre/types";

type RangeDivider<
  Start extends number,
  End extends number,
  Difference extends number = Absolute<Subtract<End, Start>>,
  ChunkSize extends number = Divide<Difference, Length<Difference>>
> = ChunkHelper<Start, End, ChunkSize>;

type ChunkHelper<
  Start extends number,
  End extends number,
  ChunkSize extends number,
  Result extends unknown[] = [],
  Difference extends number = Subtract<End, Start>,
  IsLarge extends Bit = GreaterThan<Difference, ChunkSize>,
  MidPoint extends number = Add<Start, ChunkSize>
> = Equal<Start, End> extends 1
  ? Result
  : IsLarge extends 1
  ? ChunkHelper<MidPoint, End, ChunkSize, Push<Result, [Start, MidPoint]>>
  : Push<Result, [Start, End]>;

/**
 * Splits a numeric range into chunks of equal size, returning an array of tuple ranges.
 *
 * Given a start and end number, divides the range into sub-ranges (tuples) of calculated chunk size.
 * Useful for batching, pagination, or type-level range partitioning.
 *
 * @template Start - The starting number of the range (inclusive)
 * @template End - The ending number of the range (exclusive)
 *
 * @example
 * type Chunks = Chunk<0, 6>;
 * // Expected: [[0, 3], [3, 6]]
 *
 * type ChunksReverse = Chunk<6, 0>;
 * // Expected: [[0, 3], [3, 6]]
 *
 * type ChunksSingle = Chunk<0, 1>;
 * // Expected: [[0, 1]]
 *
 * type ChunksEmpty = Chunk<2, 2>;
 * // Expected: []
 */
export type Chunk<Start extends number, End extends number> = Equal<
  Start,
  End
> extends 1
  ? []
  : GreaterThan<Start, End> extends 1
  ? RangeDivider<End, Start>
  : RangeDivider<Start, End>;

/**
 * Type-level function interface for Chunk, enabling composition in pipelines.
 *
 * @template Start - The starting number of the range
 * @template End - The ending number of the range
 *
 * @remarks
 * Use only for type-level function composition (Pipe, etc). For direct usage, prefer Chunk.
 */
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
