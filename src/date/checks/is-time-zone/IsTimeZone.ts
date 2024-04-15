import {
  Every,
  IsBetween,
  IsSubtype,
  Length,
  Pattern,
  TTake,
} from "@ibnlanre/types";

export type IsTimeZone<Value extends string> = Every<
  TTake,
  [
    IsSubtype<Value, Pattern<":" | "", `${"+" | "-"}${number}`, number>>,
    IsBetween<Length<Value>, 5, 6>
  ]
>;
