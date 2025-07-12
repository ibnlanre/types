import type { Ceil, Divide, InferNumber, ParseInt } from "@ibnlanre/types";

import type { DayOfYear } from "../../day-of-year";

type DayOfTheYearHelper<
  Year extends string,
  Month extends string,
  Day extends string
> = DayOfYear<ParseInt<Year>, ParseInt<Month>, ParseInt<Day>>;

type GregorianWeekOfYearHelper<
  Year extends string,
  Month extends string,
  Day extends string
> = DayOfTheYearHelper<Year, Month, Day> extends InferNumber<infer DayOfTheYear>
  ? Ceil<Divide<DayOfTheYear, 7>>
  : never;

export type GregorianWeekOfYear<
  Year extends string,
  Month extends string,
  Day extends string
> = GregorianWeekOfYearHelper<Year, Month, Day>;
