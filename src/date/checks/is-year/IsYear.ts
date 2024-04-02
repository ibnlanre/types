import { IsSubType, Length, ParseInt, Pattern } from "@ibnlanre/types";
import { And, GtOrEq } from "ts-arithmetic";

export type IsYear<Value extends string> = And<
  GtOrEq<Length<ParseInt<Value>>, 3>,
  IsSubType<Value, Pattern<number, "-" | "", "Z" | "-" | "">>
>;
