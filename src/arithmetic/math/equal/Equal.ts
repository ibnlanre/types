import { Bit, SomeExtendType } from "@ibnlanre/types";

export type Equal<Left extends number, Right extends number> = SomeExtendType<
  [Left, Right],
  never
> extends 1
  ? never
  : number extends Left | Right
  ? Bit
  : Left extends Right
  ? Right extends Left
    ? 1
    : 0
  : 0;
