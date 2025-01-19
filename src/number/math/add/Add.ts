import type { AddNumbers } from "../add-numbers";

export type Add<Left extends number, Right extends number> = Left extends 0
  ? Right
  : Right extends 0
  ? Left
  : number extends Left | Right
  ? number
  : AddNumbers<Left, Right>;
