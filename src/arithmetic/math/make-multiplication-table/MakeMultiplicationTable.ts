import { Digit } from "@ibnlanre/types";

import { MakeMultiplicationRow } from "../make-multiplication-row";
import { MapToOperationResult } from "../map-to-operation-result";
import { TailDigitArray } from "../tail-digit-array";

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
