import { AnyExtend } from "@ibnlanre/types";

import { CompareNumbers } from "../compare-numbers";
import { ComparisonResult } from "../comparison-result";

export type Compare<Left extends number, Right extends number> = AnyExtend<
  [Left, Right],
  never
> extends 1
  ? never
  : number extends Left | Right
  ? ComparisonResult
  : Left extends Left
  ? Right extends Right
    ? CompareNumbers<Left, Right>
    : never
  : never;
