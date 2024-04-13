import {
  Divide,
  Every,
  Fn,
  IsSubType,
  Length,
  Pow,
  Primitives,
  Subtract,
  TIsSubType,
  TrimStart,
} from "@ibnlanre/types";

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type Float<Value extends number, Decimal extends number> = Pow<
  10,
  Decimal
> extends infer Divisor extends number
  ? Divide<Value, Divisor>
  : never;

type Int<Input extends number> =
  `${Input}` extends `${infer R extends number}.${string}` ? R : Input;

type ParseIntHelper<
  Input extends string,
  Outlook extends "Signed" | "Unsigned",
  Accumulator extends string = "",
  Decimal extends number = 0,
  Sign extends "-" | "" = ""
> = Input extends `${infer Significand extends number}e-${infer Exponential extends number}`
  ? Float<Significand, Exponential>
  : Input extends `${infer Head}${infer Input}`
  ? Head extends Digit
    ? ParseIntHelper<Input, Outlook, `${Accumulator}${Head}`, Decimal, Sign>
    : Every<
        TIsSubType<1>,
        [
          IsSubType<Outlook, "Signed">,
          IsSubType<Head, "-">,
          IsSubType<Accumulator, "">
        ]
      > extends 1
    ? ParseIntHelper<Input, Outlook, Accumulator, Decimal, "-">
    : Head extends "."
    ? ParseIntHelper<Input, Outlook, Accumulator, Length<Accumulator>, Sign>
    : ParseIntHelper<Input, Outlook, Accumulator, Decimal, Sign>
  : `${Sign}${TrimStart<Accumulator>}` extends `${infer Input extends number}`
  ? Decimal extends 0
    ? Input
    : Float<Input, Subtract<Length<Accumulator>, Decimal>>
  : Input;

export type ParseInt<
  Input extends Primitives,
  Outlook extends "Signed" | "Unsigned" = "Unsigned",
  Output extends "Integer" | "Float" = "Float"
> = Input extends number
  ? Output extends "Float"
    ? Input
    : Int<Input>
  : Input extends string
  ? ParseIntHelper<Input, Outlook> extends infer Value extends number
    ? Output extends "Float"
      ? Value
      : Int<Value>
    : 0
  : Input extends true | symbol
  ? 1
  : Input extends false | null | undefined
  ? 0
  : Input;

export interface TParseInt<
  Outlook extends "Signed" | "Unsigned" | void = "Unsigned",
  Output extends "Integer" | "Float" | void = "Float",
  Input extends string | number | boolean | void = void
> extends Fn<{
    0: "Signed" | "Unsigned";
    1: "Integer" | "Float";
    2: string | number | boolean;
  }> {
  slot: [Outlook, Output, Input];
  data: ParseInt<this[2], this[0], this[1]>;
}
