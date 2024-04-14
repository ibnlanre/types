import {
  Every,
  IsBetween,
  IsSubset,
  Length,
  Pattern,
  TTake,
} from "@ibnlanre/types";

export type IsTimeZone<Value extends string> = Every<
  TTake,
  [
    IsSubset<Value, Pattern<":" | "", `${"+" | "-"}${number}`, number>>,
    IsBetween<Length<Value>, 5, 6>
  ]
>;
