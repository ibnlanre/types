import { describe, expectTypeOf, it } from "vitest";
import type { OmitOptionalValues } from "./OmitOptionalValues";

type TestType = {
  a: string;
  b?: string;
  c: {
    d: string;
    e?: string;
    f: {
      g: string;
      h?: string;
    };
  };
};

describe("OmitOptionalValues", () => {
  it("should omit optional values from the type", () => {
    type Result = OmitOptionalValues<TestType>;
    expectTypeOf<Result>().toEqualTypeOf<{
      a: string;
      c: {
        d: string;
        f: {
          g: string;
        };
      };
    }>();
  });

  it("should not allow optional values in the result type", () => {
    type Result = OmitOptionalValues<TestType>;
    expectTypeOf<Result>().not.toEqualTypeOf<{
      a: string;
      b?: string;
      c: {
        d: string;
        e?: string;
        f: {
          g: string;
          h?: string;
        };
      };
    }>();
  });
});
