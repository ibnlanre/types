import type { Fn, GenericObject, Primitives, Reference } from "@ibnlanre/types";

export type DeepPartial<Argument> = Argument extends Primitives | Reference
  ? Argument
  : Argument extends GenericObject
  ? { [Key in keyof Argument]?: DeepPartial<Argument[Key]> }
  : never;

export interface TDeepPartial<Argument extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Argument];
  data: DeepPartial<this[0]>;
}
