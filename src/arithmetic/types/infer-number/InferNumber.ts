import { Template } from "@ibnlanre/types";
import { Sign, SignToNumber } from "..";

export type InferNumber<S extends string, TSign extends Sign> = S extends "0"
  ? 0
  : Template<[SignToNumber<TSign>, S]> extends `${infer Number extends number}`
  ? Number
  : never;
