import { SomeExtendType } from "@ibnlanre/types";
import { ModNumbers } from "../mod-numbers";

export type Mod<
  Numerator extends number,
  Divisor extends number
> = SomeExtendType<[Numerator, Divisor], never> extends 1
  ? never
  : Divisor extends 0
  ? never
  : Numerator extends 0
  ? 0
  : number extends Numerator | Divisor
  ? number
  : ModNumbers<Numerator, Divisor>;
