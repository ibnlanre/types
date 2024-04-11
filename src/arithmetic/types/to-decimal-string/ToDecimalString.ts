import { Digit } from "@ibnlanre/types";
import { Join } from "..";

export type ToDecimalString<
  IntegerDigits extends Digit[],
  FractionalDigits extends Digit[]
> = FractionalDigits extends []
  ? Join<IntegerDigits>
  : `${Join<IntegerDigits>}.${Join<FractionalDigits>}`;
