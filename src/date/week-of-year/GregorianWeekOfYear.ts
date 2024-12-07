import type { Ceil, Divide, ParseInt } from "@ibnlanre/types";

import type { DayOfYear } from "../day-of-year";

type GregorianWeekOfYearHelper<
  Year extends string,
  Month extends string,
  Day extends string,
  DayOfTheYear extends number = DayOfYear<
    ParseInt<Year>,
    ParseInt<Month>,
    ParseInt<Day>
  >
> = Ceil<Divide<DayOfTheYear, 7>>;

export type GregorianWeekOfYear<
  Year extends string,
  Month extends string,
  Day extends string
> = GregorianWeekOfYearHelper<Year, Month, Day>;
