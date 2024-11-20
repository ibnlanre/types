import type { Fn, Size, SliceTo } from "@ibnlanre/types";

export type Parameters<Callback extends Fn> = SliceTo<
  Callback["params"],
  Size<Callback["slot"]>
>;
