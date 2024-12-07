import type { Digit } from "@ibnlanre/types";
import type { OperationResult } from "../operation-result";

export type OperationResultFromNumber<Number extends number> =
  `${Number}` extends `${infer Carry extends Digit}${infer Result extends Digit}`
    ? OperationResult<Carry, Result>
    : `${Number}` extends `${infer Result extends Digit}`
    ? OperationResult<0, Result>
    : never;
