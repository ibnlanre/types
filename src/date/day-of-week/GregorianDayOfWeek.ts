import {
  Add,
  Addition,
  Divide,
  Floor,
  Mod,
  Multiply,
  ParseInt,
  Subtract,
} from "@ibnlanre/types";

type GregorianDayOfWeekHelper<
  Year extends string,
  Month extends string,
  Day extends string,
  q extends number = ParseInt<Day>,
  m extends number = Month extends "01" | "02"
    ? Add<ParseInt<Month>, 12>
    : ParseInt<Month>,
  k extends number = Month extends "01" | "02"
    ? Subtract<ParseInt<Year>, 1>
    : ParseInt<Year>,
  K extends number = Mod<k, 100>,
  J extends number = Floor<Divide<k, 100>>,
  ZDate extends number = Floor<Divide<Multiply<13, Add<m, 1>>, 5>>,
  ZYear extends number = Addition<
    [Subtract<Floor<Divide<J, 4>>, Multiply<J, 2>>, Floor<Divide<K, 4>>, K]
  >
> = Floor<Mod<Addition<[q, ZDate, ZYear]>, 7, "Knuthian">>;

export type GregorianDayOfWeek<
  Year extends string,
  Month extends string,
  Day extends string
> = GregorianDayOfWeekHelper<Year, Month, Day>;
