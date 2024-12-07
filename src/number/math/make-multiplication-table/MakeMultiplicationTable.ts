import type { Digit } from "@ibnlanre/types";

import type { MakeMultiplicationRow } from "../make-multiplication-row";
import type { MapToOperationResult } from "../map-to-operation-result";
import type { TailDigitArray } from "../tail-digit-array";

export type MakeMultiplicationTable<
  Table extends unknown[],
  X extends Digit[]
> = Table["length"] extends 10
  ? Table
  : X extends TailDigitArray<infer N, infer XTail>
  ? MakeMultiplicationTable<
      [...Table, MapToOperationResult<MakeMultiplicationRow<N>>],
      XTail
    >
  : never;
