import type {
  Add,
  Addition,
  Bit,
  Concat,
  Equal,
  Fn,
  GreaterThan,
  InferArray,
  LessThan,
  Modulo,
  Multiply,
  Push,
  Subtract,
} from "@ibnlanre/types";

type ShouldContinue<
  Current extends number,
  End extends number,
  Step extends number
> = GreaterThan<Step, 0> extends 1
  ? LessThan<Current, End>
  : GreaterThan<Current, End>;

type NextState<Current extends number, Step extends number> = Add<
  Current,
  Step
>;

type ListState<Current extends number, List extends unknown[]> = Push<
  List,
  Current
>;

type RangeState<
  Current extends number,
  End extends number,
  Step extends number
> = Addition<
  [Current, Modulo<Multiply<Step, 10>, Subtract<End, Current>>, Step]
>;

type EnumerateComponent<
  Start extends number,
  End extends number,
  Step extends number = 1,
  Result extends unknown[] = [],
  Next extends number = NextState<Start, Step>,
  List extends unknown[] = ListState<Start, Result>,
  Continue extends Bit = ShouldContinue<Next, End, Step>
> = Continue extends 1
  ? EnumerateComponent<Next, End, Step, List, NextState<Next, Step>>
  : List;

type EnumerateHelper<
  Start extends number,
  End extends number,
  Step extends number = 1,
  Result extends unknown[] = [],
  Next extends number = RangeState<Start, End, Step>,
  Row extends unknown[] = EnumerateComponent<Start, Next, Step>,
  Continue extends Bit = ShouldContinue<Next, End, Step>
> = Continue extends 0
  ? Concat<Result, Row>
  : EnumerateHelper<
      Next,
      End,
      Step,
      Concat<Result, Row>,
      RangeState<Next, End, Step>
    >;

type Enumerator<
  Start extends number,
  End extends number,
  Step extends number = 1
> = EnumerateHelper<Start, End, Step> extends InferArray<infer Result, number>
  ? Result
  : never;

export type Enumerate<
  Start extends number,
  End extends number,
  Step extends number = 1
> = Equal<Start, End> extends 1 ? [] : Enumerator<Start, End, Step>;

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
