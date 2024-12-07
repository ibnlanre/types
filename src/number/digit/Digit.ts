import type { Negative } from "./Negative";
import type { Serialized } from "./Serialized";
import type { Signed } from "./Signed";
import type { String } from "./String";
import type { Tuple } from "./Tuple";

export type Digit = Tuple[number];

export declare namespace Digit {
  export type { String, Serialized, Negative, Signed, Tuple };
}
