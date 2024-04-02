import { describe, expectTypeOf, it } from "vitest";
import { Widen } from "./Widen";

describe("Widen", () => {
  it("should widen string type", () => {
    expectTypeOf<Widen<"test">>().toEqualTypeOf<string>();
    expectTypeOf<Widen<string>>().toEqualTypeOf<string>();
  });

  it("should widen number type", () => {
    expectTypeOf<Widen<24>>().toEqualTypeOf<number>();
    expectTypeOf<Widen<number>>().toEqualTypeOf<number>();
  });

  it("should widen bigint type", () => {
    expectTypeOf<Widen<3n>>().toEqualTypeOf<bigint>();
    expectTypeOf<Widen<bigint>>().toEqualTypeOf<bigint>();
  });

  it("should widen boolean type", () => {
    expectTypeOf<Widen<false>>().toEqualTypeOf<boolean>();
    expectTypeOf<Widen<boolean>>().toEqualTypeOf<boolean>();
  });

  it("should widen array type", () => {
    expectTypeOf<Widen<[1, 3, 4]>>().toEqualTypeOf<number[]>();
    expectTypeOf<Widen<number[]>>().toEqualTypeOf<number[]>();
    expectTypeOf<Widen<[string, number]>>().toEqualTypeOf<
      (string | number)[]
    >();
    expectTypeOf<[boolean, string[]]>().toEqualTypeOf<[boolean, string[]]>();
  });

  it("should widen object type", () => {
    type Input = {
      prop1: string;
      prop2: number;
      prop3: {
        nestedProp: boolean;
      };
    };

    type Expected = {
      prop1: string;
      prop2: number;
      prop3: {
        nestedProp: boolean;
      };
    };

    expectTypeOf<Widen<Input>>().toEqualTypeOf<Expected>();
  });

  it("should widen function type", () => {
    type Input = (a: string, b: number) => boolean;
    type Expected = (a: string, b: number) => boolean;

    expectTypeOf<Widen<Input>>().toEqualTypeOf<Expected>();
  });
});
