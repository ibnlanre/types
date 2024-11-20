import type { Fn, Size } from "@ibnlanre/types";

export type OccurrenceHelper<
  Input extends string,
  Substring extends string,
  Count extends Substring[] = []
> = Input extends `${string}${Substring}${infer Slice}`
  ? OccurrenceHelper<Slice, Substring, [...Count, Substring]>
  : Size<Count>;

export type Occurrence<
  Input extends string,
  Substring extends string
> = OccurrenceHelper<Input, Substring>;

export interface TOccurrence<
  Substring extends string | void = void,
  Input extends string | void = void
> extends Fn<{
    0: Substring;
    1: Input;
  }> {
  slot: [Substring, Input];
  data: Occurrence<this[1], this[0]>;
}
