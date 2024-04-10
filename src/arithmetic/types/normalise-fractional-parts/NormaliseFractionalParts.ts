import { Digit } from "@ibnlanre/types";
import { NormaliseLengths } from "../normalise-lengths";

export type NormaliseFractionalParts<
  Left extends Digit[],
  Right extends Digit[]
> = NormaliseLengths<Left, Right, "R">;
