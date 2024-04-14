import { Apply, Fn, Unshift } from "@ibnlanre/types";

type SortOperation<
  Callback extends Fn,
  Head extends Fn.Signature<Callback>,
  Rest extends Fn.Signature<Callback>[]
> = [first: Head, ...rest: Rest];

type SortHelper<
  Callback extends Fn,
  Check extends Fn.Signature<Callback>,
  List extends Fn.Signature<Callback>[]
> = List extends SortOperation<Callback, infer Head, infer Tail>
  ? Apply<Callback, [Head, Check]> extends 1
    ? Unshift<SortHelper<Callback, Check, Tail>, Head>
    : Unshift<List, Check>
  : [Check];

export type Sort<
  Callback extends Fn,
  List extends Fn.Signature<Callback>[]
> = List extends SortOperation<Callback, infer First, infer Rest>
  ? SortHelper<Callback, First, Sort<Callback, Rest>>
  : List;

export interface TSort<
  Callback extends Fn,
  List extends Fn.Signature<Callback>[] | void = void
> extends Fn<{
    0: Fn;
    1: Fn.Signature<Callback>[];
  }> {
  slot: [Callback, List];
  data: Sort<this[0], this[1]>;
}
