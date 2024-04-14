import {
  Abs,
  And,
  Append,
  Bit,
  Fn,
  Gt,
  Includes,
  IsPositive,
  Lt,
  Mod,
  Retrieve,
  Size,
  Stringify,
  Subtract,
} from "@ibnlanre/types";

type Suffixes = ["th", "st", "nd", "rd"];

type Coordinate<
  Digit extends number,
  WithinRange extends Bit = Lt<Digit, Size<Suffixes>>,
  NotNegative extends Bit = IsPositive<Digit>
> = And<WithinRange, NotNegative> extends 1
  ? Retrieve<Suffixes, Digit>
  : Retrieve<Suffixes>;

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
      : Append<Value, Retrieve<Suffixes>>
    : never
  : never;

export type Ordinal<Value extends number> = OrdinalHelper<Value>;

export interface TOrdinal<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: Ordinal<this[0]>;
}
