import {
  And,
  GreaterThanOrEqual,
  IsSubset,
  Length,
  ParseInt,
  Pattern,
} from "@ibnlanre/types";

export type IsYear<Value extends string> = And<
  GreaterThanOrEqual<Length<ParseInt<Value>>, 3>,
  IsSubset<Value, Pattern<number, "-" | "", "Z" | "-" | "">>
>;
