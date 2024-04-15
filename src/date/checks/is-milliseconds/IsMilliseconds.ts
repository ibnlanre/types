import { And, EndsWith, IsSubtype, Not, Pattern } from "@ibnlanre/types";

export type IsMilliseconds<Value extends string> = And<
  IsSubtype<Value, Pattern<number, ".", "Z" | "+" | "-" | "">>,
  Not<EndsWith<Value, ".">>
>;
