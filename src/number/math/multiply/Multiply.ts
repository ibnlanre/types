import { SomeExtendType } from "@ibnlanre/types";

import { MultiplyNumbers } from "../multiply-numbers";
import { Negate } from "../negate";

export type Multiply<
  Left extends number,
  Right extends number
> = SomeExtendType<[Left, Right], never> extends 1
  ? never
  : Left extends 0
  ? 0
  : Right extends 0
  ? 0
  : Left extends 1
  ? Right
  : Right extends 1
  ? Left
  : number extends Left | Right
  ? number
  : Left extends -1
  ? Negate<Right>
  : Right extends -1
  ? Negate<Left>
  : MultiplyNumbers<Left, Right>;
