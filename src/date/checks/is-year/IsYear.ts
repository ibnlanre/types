import {
  And,
  GreaterThanOrEqual,
  IsSubType,
  Length,
  ParseInt,
  Pattern,
} from "@ibnlanre/types";

export type IsYear<Value extends string> = And<
  GreaterThanOrEqual<Length<ParseInt<Value>>, 3>,
  IsSubType<Value, Pattern<number, "-" | "", "Z" | "-" | "">>
>;
