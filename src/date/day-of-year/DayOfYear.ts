import type { Add, Subtract } from "ts-arithmetic";
import type { DaysInMonth } from "../days-in-month";

type DayOfYearHelper<
  Year extends number,
  Month extends number,
  Stream extends number
> = Month extends 0
  ? Stream
  : DayOfYearHelper<
      Year,
      Subtract<Month, 1>,
      Add<Stream, DaysInMonth<Month, Year>>
    > extends infer R
  ? R extends number
    ? R
    : never
  : never;

export type DayOfYear<
  Year extends number,
  Month extends number,
  Day extends number
> = DayOfYearHelper<Year, Subtract<Month, 1>, Day> extends infer R
  ? R extends number
    ? R
    : never
  : never;
