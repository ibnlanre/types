import { describe, expectTypeOf, it } from "vitest";
import type { DeepRequired } from "./DeepRequired";

describe("DeepRequired", () => {
  it("should make all top-level properties required", () => {
    type Input = {
      name?: string;
      age?: number;
      active?: boolean;
    };

    type Expected = {
      name: string;
      age: number;
      active: boolean;
    };

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should deeply require all nested properties", () => {
    type Input = {
      user?: {
        details?: {
          name?: string;
          email?: string;
        };
        settings?: Array<string>;
      };
    };

    type Expected = {
      user: {
        details: {
          name: string;
          email: string;
        };
        settings: Array<string>;
      };
    };

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle array properties", () => {
    type Input = {
      tags?: string[];
      items?: Array<{
        id?: number;
        value?: string;
      }>;
    };

    type Expected = {
      tags: string[];
      items: Array<{
        id?: number;
        value?: string;
      }>;
    };

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should work with interfaces", () => {
    interface Input {
      title?: string;
      description?: string;
      metadata?: {
        created?: Date;
        updated?: Date;
      };
    }

    interface Expected {
      title: string;
      description: string;
      metadata: {
        created: Date;
        updated: Date;
      };
    }

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle union types", () => {
    type Input = {
      color?: "red" | "blue" | (string & {});
      options?: {
        size?: "small" | "medium" | "large";
        shape?: "circle" | "square";
      };
    };

    type Expected = {
      color: "red" | "blue" | (string & {});
      options: {
        size: "small" | "medium" | "large";
        shape: "circle" | "square";
      };
    };

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle union of object and undefined", () => {
    type Input = {
      config?: {
        endpoint?: string | undefined;
        retries?: number;
      };
      options?: {
        timeout?: number;
        headers?: Record<string, string>;
      };
    };

    type Expected = {
      config: {
        endpoint: string;
        retries: number;
      };
      options: {
        timeout: number;
        headers: Record<string, string>;
      };
    };

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should preserve already required properties", () => {
    type Input = {
      id: number;
      name?: string;
      metadata?: {
        created: Date;
        updated?: Date;
      };
    };

    type Expected = {
      id: number;
      name: string;
      metadata: {
        created: Date;
        updated: Date;
      };
    };

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle non-dictionary objects", () => {
    type Input = {
      title?: WeakSet<Function>;
      author?: {
        name?: WeakMap<Date, string>;
        age?: Set<number>;
      };
      published?: Map<string, Date>;
    };

    type Expected = {
      title: WeakSet<Function>;
      author: {
        name: WeakMap<Date, string>;
        age: Set<number>;
      };
      published: Map<string, Date>;
    };

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle empty objects", () => {
    type Input = {};
    type Expected = {};

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it("should handle function properties", () => {
    type Input = {
      callback?: () => void;
      handler?: (event: string) => boolean;
    };

    type Expected = {
      callback: () => void;
      handler: (event: string) => boolean;
    };

    type Result = DeepRequired<Input>;
    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });
});
