import {
  DecomposeNum,
  NumComponents,
  SignedFloat,
  SplitIntoDigits,
  UnsignedFloat,
} from "..";

export type ToSignedFloat<N extends number> =
  DecomposeNum<N> extends NumComponents<infer TSign, infer Integer, infer Float>
    ? SignedFloat<
        TSign,
        UnsignedFloat<SplitIntoDigits<Integer>, SplitIntoDigits<Float>>
      >
    : never;
