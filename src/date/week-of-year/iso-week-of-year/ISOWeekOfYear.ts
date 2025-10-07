import type { InferNumber, Subtract } from "@ibnlanre/types";

import type { ISODayOfWeek } from "../../day-of-week";
import type { GregorianWeekOfYear } from "../gregorian-week-of-year/GregorianWeekOfYear";
import type { SubtractDate } from "../../manipulate-date/ManipulateDate";

type GetWeekMonday<
  Year extends string,
  Month extends string,
  Day extends string,
  Date extends DateTime = { year: Year; month: Month; day: Day }
> = ISODayOfWeek<Year, Month, Day> extends InferNumber<infer DayOfWeek>
  ? DayOfWeek extends 1
    ? Date
    : SubtractDate<Date, { day: Subtract<DayOfWeek, 1> }> extends InferDateTime<
        infer MondayYear,
        infer MondayMonth,
        infer MondayDay
      >
    ? { year: MondayYear; month: MondayMonth; day: MondayDay }
    : never
  : never;

type DateTime = {
  year: string;
  month: string;
  day: string;
};

type InferDateTime<
  Year extends string,
  Month extends string,
  Day extends string
> = {
  year: Year;
  month: Month;
  day: Day;
};

type ISOWeekOfYearHelper<
  Year extends string,
  Month extends string,
  Day extends string,
  WeekMonday extends DateTime = GetWeekMonday<Year, Month, Day>
> = WeekMonday extends InferDateTime<
  infer MondayYear,
  infer MondayMonth,
  infer MondayDay
>
  ? GregorianWeekOfYear<MondayYear, MondayMonth, MondayDay> 
  : never;

export type ISOWeekOfYear<
  Year extends string,
  Month extends string,
  Day extends string
> = ISOWeekOfYearHelper<Year, Month, Day> extends InferNumber<infer WeekOfYear>
  ? WeekOfYear
  : never;
