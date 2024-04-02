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
