import { Ceil, ParseInt } from "@ibnlanre/types";
import { Divide } from "ts-arithmetic";

import { DayOfYear } from "../day-of-year";

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
