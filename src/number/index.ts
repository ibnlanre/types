import type { Math } from "./math";

export type { ParseInt, TParseInt } from "./parse-int";

export type {
  Absolute,
  Add,
  Addition,
  Ceil,
  Decrement,
  Divide,
  Division,
  Floor,
  Increment,
  Modulo,
  Multiplication,
  Multiply,
  Negate,
  NoNumber,
  Ordinal,
  Pow,
  Round,
  Sign,
  SquareRoot,
  Subtract,
  Subtraction,
  TAbsolute,
  TAdd,
  TAddition,
  TCeil,
  TDecrement,
  TDivide,
  TDivision,
  TFloor,
  TIncrement,
  TModulo,
  TMultiplication,
  TMultiply,
  TNegate,
  TNoNumber,
  TOrdinal,
  TPow,
  TRound,
  TSign,
  TSquareRoot,
  TSubtract,
  TSubtraction,
  TToFixed,
  TTrunc,
  ToFixed,
  Trunc,
} from "./arithmetic";

/**
 * @name Bit
 * A type representing a binary number.
 */
export type { Bit } from "./binary";

/**
 * @name Digit
 * A type representing a digit.
 */
export type { Digit } from "./digit";

/**
 * @name Parity
 * Types representing the parity of a number.
 */
export type {
  IsEven,
  IsInteger,
  IsNegative,
  IsNonInteger,
  IsOdd,
  IsPositive,
  TIsEven,
  TIsInteger,
  TIsNegative,
  TIsNonInteger,
  TIsOdd,
  TIsPositive,
} from "./parity";

/**
 * @name Extrema
 * Types representing the extrema of a number.
 */
export type { Clamp, Max, Maximum, Min, Minimum } from "./extrema";

/**
 * @name Math
 * Types representing mathematical operations.
 */
export type { Math } from "./math";

/**
 * @name Bitwise
 * Type representing bitwise operations.
 */
export type {
  And,
  Nand,
  Not,
  Or,
  TAnd,
  TNand,
  TNot,
  TOr,
  TXor,
  Xor,
} from "./bitwise";

/**
 * @name Relational
 * Types representing relational operations.
 */
export type {
  Branch,
  Compare,
  Equal,
  GreaterThan,
  GreaterThanOrEqual,
  LessThan,
  LessThanOrEqual,
  TBranch,
  TCompare,
  TEqual,
  TGreaterThan,
  TGreaterThanOrEqual,
  TLessThan,
  TLessThanOrEqual,
} from "./relational";
