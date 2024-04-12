import { SomeExtendType } from "@ibnlanre/types";
import { AddNumbers } from "../add-numbers";

export type Add<Left extends number, Right extends number> = SomeExtendType<
  [Left, Right],
  never
> extends 1
  ? never
  : number extends Left | Right
  ? number
  : Left extends 0
  ? Right
  : Right extends 0
  ? Left
  : AddNumbers<Left, Right>;
