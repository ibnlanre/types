import {
  Append,
  Fn,
  Includes,
  Size,
  Stringify,
  ValueAt,
} from "@ibnlanre/types";
import {
  Abs,
  And,
  Bit,
  Gt,
  IsPositive,
  Lt,
  Mod,
  Subtract,
} from "ts-arithmetic";

type Suffixes = ["th", "st", "nd", "rd"];

type Coordinate<
  Digit extends number,
  WithinRange extends Bit = Lt<Digit, Size<Suffixes>>,
  NotNegative extends Bit = IsPositive<Digit>
> = And<WithinRange, NotNegative> extends 1
  ? ValueAt<Suffixes, Digit>
  : ValueAt<Suffixes, 0>;

type OrdinalHelper<
  NumberToOrdinal extends number,
  TensDigit extends number = Mod<Abs<NumberToOrdinal>, 100>,
  UnitsDigit extends number = Gt<TensDigit, 10> extends 1
    ? Mod<Subtract<TensDigit, 20>, 10>
    : TensDigit
> = Stringify<NumberToOrdinal> extends infer Value
  ? Value extends string
    ? Includes<Suffixes, Coordinate<UnitsDigit>> extends 1
      ? Append<Value, Coordinate<UnitsDigit>>
      : Includes<Suffixes, Coordinate<TensDigit>> extends 1
      ? Append<Value, Coordinate<TensDigit>>
      : Append<Value, ValueAt<Suffixes, 0>>
    : never
  : never;

export type Ordinal<Number extends number> = OrdinalHelper<Number>;

export interface TOrdinal<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Ordinal<this[0]>;
}
