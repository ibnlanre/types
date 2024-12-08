import type {
  Add,
  Fn,
  GreaterThan,
  InferArray,
  InferNumber,
  Length,
  Min,
  SquareRoot,
  Subtract,
} from "@ibnlanre/types";
import type { Divide } from "src/number/math/divide";
import type { Power } from "src/number/math/power";

type Enumerate<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Next extends number = Add<Start, 1>
> = Start extends End ? Result : Enumerate<Next, End, [...Result, Start]>;

type RangeHelper<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Limit extends number = Subtract<End, Start>,
  Increment extends number = Min<Limit, 9>,
  Next extends number = Add<Start, Increment>,
  LastRow extends number[] = Enumerate<Start, Next>
> = Start extends End
  ? [...Result, End]
  : RangeHelper<Next, End, [...Result, ...LastRow]>;

export type Range<Start extends number, End extends number> = RangeHelper<
  Start,
  End
>;

// type Ranger<
//   Start extends number,
//   End extends number,
//   Difference extends number = Subtract<End, Start>,
//   Width extends number = Length<`${Difference}`>,
//   Chunks extends number[] = []
// > = Width extends 0
//   ? Chunks
//   : Ranger<
//       Start,
//       End,
//       Subtract<Difference, 10>,
//       Subtract<Width, 1>,
//       [...Chunks, 10]
//     >;
//     type ChunkRanges<
//       Start extends number,
//       Chunks extends number[],
//       Result extends number[] = []
//     > = Chunks extends [infer First extends number, ...infer Rest extends number[]]
//       ? ChunkRanges<Add<Start, First>, Rest, [...Result, ...Range<Start, Add<Start, First>>]>
//       : Result;

//     type FinalRange<
//       Start extends number,
//       End extends number,
//       Chunks extends number[] = Ranger<Start, End>
//     > = ChunkRanges<Start, Chunks>;

// type Chunks<
//   Start extends number,
//   End extends number,
//   Difference extends number = Subtract<End, Start>,
//   Width extends number = Subtract<Length<Difference>, 1>,
//   Increment extends number = Power<10, Width>,
//   Result extends number[] = []
// > = Increment;

// type ChunksHelper<
//   Start extends number,
//   End extends number,
//   Increment extends number,
//   Result extends number[] = []
// > = ChunksHelper<
//       Add<Start, Increment> extends InferNumber< infer Next> ? Next : never,
//       End,
//       Increment,
//       [...Result, ...Range<Start, Min<Add<Start, Increment>, End>>]
//     >;

type Test = Chunks<1, 2000>;
//   ^?

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

type Chunks<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Difference extends number = Subtract<End, Start>,
  Width extends number = Subtract<Length<Difference>, 1>,
  SquareWidth extends number = Divide<Width, 2>,
  Increment extends number = Power<10, SquareWidth>
> = SquareWidth;
