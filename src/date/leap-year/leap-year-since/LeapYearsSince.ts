import type {
  Add,
  Divide,
  Floor,
  GreaterThan,
  Subtract,
} from "@ibnlanre/types";

type CountDivisibleBy<
  Year extends number,
  Period extends number,
  N extends number
> = Floor<Divide<Subtract<Year, Period>, N>>;

type CalculateLeapYears<Year extends number> = Subtract<
  Add<
    Subtract<CountDivisibleBy<Year, 0, 4>, CountDivisibleBy<Year, 0, 100>>,
    CountDivisibleBy<Year, 0, 400>
  >,
  0
>;

/**
 * Calculates the number of leap years since a given period.
 *
 * @template Year - The year to calculate leap years from.
 * @template Period - The starting period, default is 1970.
 *
 * @returns The number of leap years since the specified period.
 */
export type LeapYearsSince<
  Year extends number,
  Period extends number = 1970
> = GreaterThan<Year, Period> extends 1
  ? Subtract<CalculateLeapYears<Year>, CalculateLeapYears<Period>>
  : 0;
