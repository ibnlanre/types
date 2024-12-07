import type { AnyExtend } from "@ibnlanre/types";

import type { CompareNumbers } from "../compare-numbers";
import type { ComparisonResult } from "../comparison-result";

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
