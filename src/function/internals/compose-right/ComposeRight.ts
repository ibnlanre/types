import { Apply, Fn, Inspect } from "@ibnlanre/types";

export type ComposeRight<
  Argument extends unknown,
  List extends Fn[]
> = List extends [infer Left extends Fn, ...infer Rest extends Fn[]]
  ? Argument extends Inspect<Left>
    ? [Left, ...ComposeRight<Apply<Left, [Argument]>, Rest>]
    : []
  : List;
