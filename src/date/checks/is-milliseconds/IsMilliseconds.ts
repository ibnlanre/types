import { And, EndsWith, IsSubset, Not, Pattern } from "@ibnlanre/types";

export type IsMilliseconds<Value extends string> = And<
  IsSubset<Value, Pattern<number, ".", "Z" | "+" | "-" | "">>,
  Not<EndsWith<Value, ".">>
>;
