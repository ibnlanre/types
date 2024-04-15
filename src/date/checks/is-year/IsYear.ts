import {
  And,
  GreaterThanOrEqual,
  IsSubtype,
  Length,
  ParseInt,
  Pattern,
} from "@ibnlanre/types";

export type IsYear<Value extends string> = And<
  GreaterThanOrEqual<Length<ParseInt<Value>>, 3>,
  IsSubtype<Value, Pattern<number, "-" | "", "Z" | "-" | "">>
>;
