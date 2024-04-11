import {
  DecomposeNumber,
  NumberComponents,
  SignedFloat,
  SplitIntoDigits,
  UnsignedFloat,
} from "..";

export type ToSignedFloat<N extends number> =
  DecomposeNumber<N> extends NumberComponents<
    infer TSign,
    infer Integer,
    infer Float
  >
    ? SignedFloat<
        TSign,
        UnsignedFloat<SplitIntoDigits<Integer>, SplitIntoDigits<Float>>
      >
    : never;
