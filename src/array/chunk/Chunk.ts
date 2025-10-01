import type {
  Add,
  Equal,
  Fn,
  Length,
  Divide,
  GreaterThan,
  Subtract,
  Bit,
  Push,
  Absolute
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
  MidPoint extends number = Add<Start, ChunkSize>,
> = Equal<Start, End> extends 1
  ? Result
  : IsLarge extends 1
  ? ChunkHelper<
      MidPoint,
      End,
      ChunkSize,
      Push<Result, [Start, MidPoint]>
    >
  : Push<Result, [Start, End]>;

export type Chunk<Start extends number, End extends number> = Equal<
  Start,
  End
> extends 1
  ? []
  : GreaterThan<Start, End> extends 1
  ? RangeDivider<End, Start>
  : RangeDivider<Start, End>;

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
