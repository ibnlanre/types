import type { AnyExtend } from "@ibnlanre/types";
import type { AddNumbers } from "../add-numbers";

export type Add<Left extends number, Right extends number> = AnyExtend<
  [Left, Right],
  never
> extends 1
  ? never
  : Left extends 0
  ? Right
  : Right extends 0
  ? Left
  : number extends Left | Right
  ? number
  : AddNumbers<Left, Right>;
