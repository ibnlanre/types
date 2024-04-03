import { Fn, Size, SliceTo } from "@ibnlanre/types";

type SingleOut<List extends unknown[]> = List extends [infer Value]
  ? Value
  : List;

type MarkOut<List extends unknown[], Types> = List extends [
  ...infer Ls,
  infer Lv
]
  ? Types extends [...infer Ts, infer Tv]
    ? [Lv] extends [void]
      ? [...MarkOut<Ls, Ts>, Tv]
      : MarkOut<Ls, Ts>
    : []
  : [];

export type Inspect<Callback extends Fn> = Callback["slot"] extends unknown[]
  ? SingleOut<
      MarkOut<
        Callback["slot"],
        SliceTo<Callback["params"], Size<Callback["slot"]>>
      >
    >
  : never;
