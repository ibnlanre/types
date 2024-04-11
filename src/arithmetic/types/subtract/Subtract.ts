import { Negate, SomeExtendType } from "@ibnlanre/types";
import { SubtractNumbers } from "..";

export type Subtract<
  Left extends number,
  Right extends number
> = SomeExtendType<[Left, Right], never> extends 1
  ? never
  : number extends Left | Right
  ? number
  : Left extends 0
  ? Negate<Right>
  : Right extends 0
  ? Left
  : SubtractNumbers<Left, Right>;
