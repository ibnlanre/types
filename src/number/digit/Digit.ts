import { Negative } from "./Negative";
import { Serialized } from "./Serialized";
import { Signed } from "./Signed";
import { String } from "./String";
import { Tuple } from "./Tuple";

export type Digit = Tuple[number];

export declare namespace Digit {
  export type { String, Serialized, Negative, Signed, Tuple };
}
