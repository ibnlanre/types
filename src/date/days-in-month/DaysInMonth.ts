import type { IsLeapYear } from "../IsLeapYear";

export type DaysInMonth<
  Month extends number,
  Year extends number
> = Month extends 2
  ? IsLeapYear<Year> extends 1
    ? 29
    : 28
  : Month extends 4 | 6 | 9 | 11
  ? 30
  : 31;
