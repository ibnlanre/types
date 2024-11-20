import type {
  And,
  Fn,
  GreaterThanOrEqual,
  LessThanOrEqual,
} from "@ibnlanre/types";

export type IsBetween<
  Input extends number,
  LowerBound extends number,
  UpperBound extends number
> = And<
  GreaterThanOrEqual<Input, LowerBound>,
  LessThanOrEqual<Input, UpperBound>
>;

export interface TIsBetween<
  LowerBound extends number | void = void,
  UpperBound extends number | void = void,
  Input extends number | void = void
> extends Fn<{
    0: number;
    1: number;
    2: number;
  }> {
  slot: [LowerBound, UpperBound, Input];
  data: IsBetween<this[2], this[0], this[1]>;
}
