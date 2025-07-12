import type {
  Add,
  Chunk,
  Concat,
  Equal,
  Fn,
  InferArray,
  Push,
} from "@ibnlanre/types";

/**
 * Helper type for processing individual number ranges
 */
type RangeSequence<
  Start extends number,
  End extends number,
  Accumulator extends number[] = []
> = Equal<Start, End> extends 1
  ? Accumulator
  : Accumulator['length'] extends 1000 // Prevent excessive recursion
  ? never
  : RangeSequence<Add<Start, 1>, End, Push<Accumulator, Start>>;

/**
 * Helper type for processing range chunks
 */
type RangeHelper<
  Chunks extends readonly (readonly [number, number])[],
  Result extends number[] = []
> = Chunks extends readonly []
  ? Result
  : Chunks extends readonly [
      readonly [infer Start, infer End],
      ...infer RestChunks
    ]
  ? Start extends number
    ? End extends number
      ? RestChunks extends readonly (readonly [number, number])[]
        ? RangeSequence<Start, End> extends infer Sequence
          ? Sequence extends number[]
            ? RangeHelper<RestChunks, Concat<Result, Sequence>>
            : never
          : never
        : never
      : never
    : never
  : never;

/**
 * Creates a range of numbers from `From` to `To` (exclusive)
 * 
 * @example
 * ```typescript
 * type Range0to5 = Range<0, 5>; // [0, 1, 2, 3, 4]
 * type Range2to7 = Range<2, 7>; // [2, 3, 4, 5, 6]
 * type EmptyRange = Range<5, 5>; // []
 * ```
 * 
 * @template From - The starting number (inclusive)
 * @template To - The ending number (exclusive) 
 */
export type Range<From extends number, To extends number> = Chunk<
  From,
  To
> extends InferArray<infer ChunkArray, readonly [number, number]>
  ? ChunkArray extends readonly (readonly [number, number])[]
    ? RangeHelper<ChunkArray> extends infer ComputedRange
      ? ComputedRange extends number[]
        ? ComputedRange
        : never
      : never
    : never
  : never;

type Test = Range<1, 10000>;