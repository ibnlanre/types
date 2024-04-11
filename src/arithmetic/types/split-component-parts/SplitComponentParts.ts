import { Template } from "@ibnlanre/types";
import { NumberComponents } from "..";

export type SplitComponentParts<Input extends string | number> =
  Template<Input> extends `${infer Integer}.${infer Fraction}`
    ? NumberComponents<never, Integer, Fraction>
    : NumberComponents<never, Template<Input>, "">;
