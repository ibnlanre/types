import { Template } from "@ibnlanre/types";
import { NumComponents } from "..";

export type SplitComponentParts<Input extends string | number> =
  Template<Input> extends `${infer Integer}.${infer Fraction}`
    ? NumComponents<never, Integer, Fraction>
    : NumComponents<never, Template<Input>, "">;
