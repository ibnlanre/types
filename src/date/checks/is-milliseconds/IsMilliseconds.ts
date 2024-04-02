import { EndsWith, IsSubType, Pattern } from "@ibnlanre/types";
import { And, Not } from "ts-arithmetic";

export type IsMilliseconds<Value extends string> = And<
  IsSubType<Value, Pattern<number, ".", "Z" | "+" | "-" | "">>,
  Not<EndsWith<Value, ".">>
>;
