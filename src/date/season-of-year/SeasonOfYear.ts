/**
 * Calculates the season of the year based on the month.
 * 
 * @template Month - The month of the date, represented as a string (e.g., "01" for January).
 * @returns The season of the year as a string ("Spring", "Summer", "Autumn", or "Winter").
 */
export type SeasonOfYear<Month extends string> = Month extends
  | "01"
  | "02"
  | "03"
  ? "Spring"
  : Month extends "04" | "05" | "06"
  ? "Summer"
  : Month extends "07" | "08" | "09"
  ? "Autumn"
  : Month extends "10" | "11" | "12"
  ? "Winter"
  : never;
