import type {
  Add,
  Chunk,
  Concat,
  Equal,
  Fn,
  InferArray,
  Push,
} from "@ibnlanre/types";

type TailNumberArray<Head extends number[], Rest extends number[][]> = [
  Head,
  ...Rest
];

type NumberPair<Start extends number, End extends number> = [
  start: Start,
  end: End
];

type ProcessRange<
  Start extends number,
  End extends number,
  Result extends unknown[] = []
> = Equal<Start, End> extends 1
  ? Result
  : ProcessRange<Add<Start, 1>, End, Push<Result, Start>>;

type ProcessChunks<
  Chunk extends unknown[][],
  Result extends unknown[] = []
> = Chunk extends []
  ? Result
  : Chunk extends TailNumberArray<infer Head, infer Rest>
  ? Head extends NumberPair<infer Start, infer End>
    ? ProcessChunks<Rest, Concat<Result, ProcessRange<Start, End>>>
    : never
  : never;

export type Range<From extends number, To extends number> = Chunk<
  From,
  To
> extends InferArray<infer Chunks, number[]>
  ? ProcessChunks<Chunks> extends InferArray<infer Result, number>
    ? Result
    : never
  : never;

export interface TRange<
  From extends number | void = void,
  To extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [From, To];
  data: Range<this[0], this[1]>;
}
