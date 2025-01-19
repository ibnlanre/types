import type {
  Add,
  Concat,
  Equal,
  Fn,
  GreaterThan,
  InferArray,
  Min,
  Push,
  Subtract,
} from "@ibnlanre/types";

type EnumerateComponent<
  Start extends number,
  End extends number,
  Result extends unknown[] = [],
  Next extends number = Add<Start, 1>,
  List extends unknown[] = Push<Result, Start>
> = Equal<Start, End> extends 1 ? Result : EnumerateComponent<Next, End, List>;

type EnumerateHelper<
  Start extends number,
  End extends number,
  Result extends unknown[] = [],
  Limit extends number = Subtract<End, Start>,
  Increment extends number = Min<Limit, 9>,
  Next extends number = Add<Start, Increment>,
  LastRow extends unknown[] = EnumerateComponent<Start, Next>
> = Start extends End
  ? Result
  : EnumerateHelper<Next, End, Concat<Result, LastRow>>;

type Enumerator<Start extends number, End extends number> = EnumerateHelper<
  Start,
  End
> extends InferArray<infer Result, number>
  ? Result
  : never;

export type Enumerate<Start extends number, End extends number> = Equal<
  Start,
  End
> extends 1
  ? []
  : GreaterThan<Start, End> extends 1
  ? Enumerator<End, Start>
  : Enumerator<Start, End>;

export interface TEnumerate<
  Start extends number | void = void,
  End extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [End, Start];
  data: Enumerate<this[1], this[0]>;
}
