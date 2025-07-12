/**
 * Calculates the quarter of the year based on the month.
 * 
 * @template Month - The month of the date, represented as a string (e.g., "01" for January).
 * * @returns The quarter of the year as a number (1, 2, 3, or 4).
 */
export type QuarterOfYear<Month extends string> = Month extends
  | "01"
  | "02"
  | "03"
  ? 1
  : Month extends "04" | "05" | "06"
  ? 2
  : Month extends "07" | "08" | "09"
  ? 3
  : Month extends "10" | "11" | "12"
  ? 4
  : never;
