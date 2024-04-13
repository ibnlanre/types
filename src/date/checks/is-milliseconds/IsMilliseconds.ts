import { And, EndsWith, IsSubType, Not, Pattern } from "@ibnlanre/types";

export type IsMilliseconds<Value extends string> = And<
  IsSubType<Value, Pattern<number, ".", "Z" | "+" | "-" | "">>,
  Not<EndsWith<Value, ".">>
>;
