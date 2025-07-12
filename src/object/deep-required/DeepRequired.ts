import type { Fn, Primitives, Reference } from "@ibnlanre/types";
import type { GenericObject } from "src/native/object";

export type DeepRequired<Argument> = Argument extends Primitives | Reference
  ? Argument
  : Argument extends GenericObject
  ? { [Key in keyof Argument]-?: DeepRequired<Argument[Key]> }
  : never;

export interface TDeepRequired<Argument extends GenericObject | void = void>
  extends Fn<{
    0: GenericObject;
  }> {
  slot: [Argument];
  data: DeepRequired<this[0]>;
}
