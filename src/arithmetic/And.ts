import { Apply, Fn, Inspect } from "@ibnlanre/types";
import { And, Bit } from "ts-arithmetic";

export type UAnd<
  Argument extends Inspect<RCallback | LCallback>,
  RCallback extends Fn,
  LCallback extends Fn
> = Apply<RCallback, [Argument]> extends infer R extends Bit
  ? Apply<LCallback, [Argument]> extends infer L extends Bit
    ? And<R, L>
    : 0
  : 0;

export interface TAnd<
  RCallback extends Fn | void = void,
  LCallback extends Fn | void = void,
  Argument extends Inspect<Exclude<RCallback | LCallback, void>> | void = void
> extends Fn<{
    0: Fn;
    1: Fn;
    2: Inspect<Exclude<RCallback | LCallback, void>>;
  }> {
  slot: [RCallback, LCallback, Argument];
  data: UAnd<this[2], this[0], this[1]>;
}

export { And };
