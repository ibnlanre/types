import { OperationResultFromNumber } from "../operation-result-from-number";

export type MapToOperationResult<TRow extends number[]> = {
  [K in keyof TRow]: OperationResultFromNumber<TRow[K]>;
};
