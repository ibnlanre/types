import { Split } from "src/string";

type LowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
type UnionOfLowercaseLetter = Split<LowercaseLetter>;
type UppercaseLetter = Uppercase<LowercaseLetter>;
type SplitUppercaseLetter = Split<UppercaseLetter>;

// export type NonEmptyString =
