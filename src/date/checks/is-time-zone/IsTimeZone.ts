import { Every, IsBetween, IsSubType, Length, Pattern } from "@ibnlanre/types";

export type IsTimeZone<Value extends string> = Every<
  [
    IsSubType<Value, Pattern<":" | "", `${"+" | "-"}${number}`, number>>,
    IsBetween<Length<Value>, 5, 6>
  ]
>;
