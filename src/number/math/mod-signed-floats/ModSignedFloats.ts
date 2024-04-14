import { ModUnsignedFloats } from "../mod-unsigned-floats";
import { Sign } from "../sign";
import { SignedFloat } from "../signed-float";

export type ModSignedFloats<
  Numerator extends SignedFloat,
  Divisor extends SignedFloat
> = Numerator extends SignedFloat<
  infer NumeratorSign,
  infer NumeratorUnsignedFloat
>
  ? Divisor extends SignedFloat<Sign, infer DivisorUnsignedFloat>
    ? SignedFloat<
        NumeratorSign,
        ModUnsignedFloats<NumeratorUnsignedFloat, DivisorUnsignedFloat>
      >
    : never
  : never;
