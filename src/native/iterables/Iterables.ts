import { Maps, Sets } from "../structures";

export type Iterables =
  | string
  | Iterable<any>
  | AsyncIterable<any>
  | IterableIterator<any>
  | AsyncIterableIterator<any>
  | Sets
  | Maps;
