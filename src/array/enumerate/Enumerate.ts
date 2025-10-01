import type {
  Add,
  Bit,
  Concat,
  Equal,
  Fn,
  GreaterThan,
  GreaterThanOrEqual,
  LessThanOrEqual,
  Min,
  Push,
} from "@ibnlanre/types";

type EnumerateBatch<
  Current extends number,
  End extends number,
  Step extends number,
  Result extends number[] = [],
  IsPositiveStep extends Bit = GreaterThan<Step, 0>,
  IsPastEnd extends Bit = IsPositiveStep extends 1
    ? GreaterThanOrEqual<Current, End>
    : LessThanOrEqual<Current, End>
> = IsPastEnd extends 1
  ? Result
  : EnumerateBatch<Add<Current, Step>, End, Step, Push<Result, Current>>;

type EnumerateHelper<
  Current extends number,
  End extends number,
  Step extends number = 1,
  Result extends number[] = [],
  BatchSize extends number = 999,
  IsPositiveStep extends Bit = GreaterThan<Step, 0>,
  IsPastEnd extends Bit = IsPositiveStep extends 1
    ? GreaterThanOrEqual<Current, End>
    : LessThanOrEqual<Current, End>,
  BatchEnd extends number = Min<Add<Current, BatchSize>, End>,
  Batch extends number[] = EnumerateBatch<Current, BatchEnd, Step>
> = IsPastEnd extends 1
  ? Result
  : EnumerateHelper<BatchEnd, End, Step, Concat<Result, Batch>>;

export type Enumerate<
  Start extends number,
  End extends number,
  Step extends number = 1
> = Equal<Start, End> extends 1 ? [] : EnumerateHelper<Start, End, Step>;

export interface TEnumerate<
  Start extends number | void = void,
  End extends number | void = void,
  Step extends number = 1
> extends Fn<{
    0: number;
    1: number;
    2: number;
  }> {
  slot: [Start, End, Step];
  data: Enumerate<this[0], this[1], this[2]>;
}
