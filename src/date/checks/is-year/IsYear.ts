import {
  And,
  GtOrEq,
  IsSubType,
  Length,
  ParseInt,
  Pattern,
} from "@ibnlanre/types";

export type IsYear<Value extends string> = And<
  GtOrEq<Length<ParseInt<Value>>, 3>,
  IsSubType<Value, Pattern<number, "-" | "", "Z" | "-" | "">>
>;
