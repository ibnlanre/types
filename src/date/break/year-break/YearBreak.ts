import {
  Abs,
  Assign,
  Eq,
  IsBetween,
  Length,
  PadStart,
  ParseInt,
  Stringify,
} from "@ibnlanre/types";

import { IsYear } from "../../checks";

type YearHelper<
  Y extends string,
  Output extends Record<string, any> = {},
  Year extends string = Stringify<Abs<ParseInt<Y>>>,
  Size extends number = Length<Year>
> = IsBetween<ParseInt<Y>, -271820, 275759> extends 1
  ? IsBetween<Size, 5, 6> extends 1
    ? Assign<Output, "year", `+${PadStart<Year, 6>}`>
    : Eq<Size, 4> extends 1
    ? Assign<Output, "year", PadStart<Year, 4>>
    : Assign<Output, "year", Y>
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
