import {
  IsBetween,
  Length,
  PadStart,
  ParseInt,
  SetValue,
  Stringify,
} from "@ibnlanre/types";
import { Abs, Eq } from "ts-arithmetic";

import { IsYear } from "../../checks";

type YearHelper<
  Y extends string,
  Output extends Record<string, any> = {},
  Year extends string = Stringify<Abs<ParseInt<Y>>>,
  Size extends number = Length<Year>
> = IsBetween<ParseInt<Y>, -271820, 275759> extends 1
  ? IsBetween<Size, 5, 6> extends 1
    ? SetValue<Output, "year", `+${PadStart<Year, 6>}`>
    : Eq<Size, 4> extends 1
    ? SetValue<Output, "year", PadStart<Year, 4>>
    : SetValue<Output, "year", Y>
  : "Invalid Date";

export type YearBreak<
  Token extends string,
  Output extends Record<string, any> = {}
> = IsYear<Token> extends 1
  ? Token extends `${infer Y}Z`
    ? YearHelper<Y, Output>
    : Token extends `${infer Y}-`
    ? YearHelper<Y, Output>
    : Token extends `${infer Y}`
    ? YearHelper<Y, Output>
    : never
  : "The token provided is not a valid year.";
