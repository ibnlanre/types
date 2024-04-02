import { Floor, ParseInt } from "@ibnlanre/types";
import { Add, Divide } from "ts-arithmetic";

import { DayOfWeek } from "../day-of-week";
import { DayOfYear } from "../day-of-year";

type ISOWeekOfYearHelper<
  Year extends string,
  Month extends string,
  Day extends string,
  DayOfTheWeek extends number = Add<
    DayOfWeek<Year, Month, Day, "Gregorian">,
    5
  >,
  DayOfTheYear extends number = DayOfYear<
    ParseInt<Year>,
    ParseInt<Month>,
    ParseInt<Day>
  >
> = Floor<Divide<Add<DayOfTheYear, DayOfTheWeek>, 7>>;

export type ISOWeekOfYear<
  Year extends string,
  Month extends string,
  Day extends string
> = ISOWeekOfYearHelper<Year, Month, Day>;
