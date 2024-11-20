import type { Fn } from "@ibnlanre/types";

export type Call<Callback extends Fn> = (Callback & {
  args: Callback["slot"];
})["data"];

export interface TCall<Callback extends Fn>
  extends Fn<{
    0: Fn;
  }> {
  slot: [Callback];
  data: Call<this[0]>;
}
