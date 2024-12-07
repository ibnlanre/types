import type { Digit } from "@ibnlanre/types";
import type { NormaliseLengths } from "../normalise-lengths";

export type NormaliseIntegerParts<
  Left extends Digit[],
  Right extends Digit[]
> = NormaliseLengths<Left, Right, "L">;
