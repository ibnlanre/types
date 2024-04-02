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
