# Copilot Instructions for @ibnlanre/types

## Project Overview

This is a type-level programming library for TypeScript, providing composable utility types inspired by functional programming. The core innovation is the `Fn` interface (`src/function/fn/Fn.ts`) which enables type-level function composition similar to runtime function composition.

## Architecture & Conventions

### Dual Interface Pattern

Every utility type has TWO exports:

1. **Base type** (e.g., `Anchor`, `ArrayOf`) - Used directly as generic type
2. **T-prefixed interface** (e.g., `TAnchor`, `TArrayOf`) - Extends `Fn` for composition in pipelines

```typescript
// Base type - direct usage
export type ArrayOf<Length, Element> = ...

// T-prefixed - for Pipe/composition
export interface TArrayOf<...> extends Fn<{...}> {
  slot: [Length, Element];
  data: ArrayOf<this[0], this[1]>;
}
```

**Critical**: When documenting or testing, focus on the base type. T-prefixed interfaces are for composition only.

### Type-Level Performance Guidelines

Consult `.github/instructions/generic-type-creation.instructions.md` when writing complex types. Key principles:

- **Avoid spreading**: Use `Concat<A, B>` instead of `[...A, ...B]`, `Push<A, Element>` instead of `[...A, Element]`
- **Pre-compute in parameters**: Calculate expensive operations in default parameter values, not in the type body
- **Modular decomposition**: Split complex conditional types into small helper branches (see `src/date/advanced-format/AdvancedFormat.ts`)
- **Expand then reprocess**: For meta-tokens (like localized date formats), expand to concrete form then re-run the dispatcher

### Directory Structure

Types organized by category:

- `src/array/` - Array manipulations (anchor, chunk, permutation, etc.)
- `src/string/` - String operations (replace, trim, substring, etc.)
- `src/number/` - Arithmetic and math operations
- `src/object/` - Object utilities (paths, keys, deep operations)
- `src/date/` - Date formatting and parsing types
- `src/boolean/` - Type predicates and conditional logic
- `src/function/` - Function composition (`Fn`, `Pipe`, composition utilities)
- `src/inference/` - Type inference helpers (InferArray, InferNumber, etc.)

Each utility lives in its own directory with `index.ts` export.

## Development Workflows

### Testing

```bash
# Run all type tests
pnpm test

# Run specific test file
pnpm vitest run --typecheck src/array/anchor/Anchor.test.ts

# Type check without running tests
pnpm ts-check
```

**Test conventions**:

- File naming: `[TypeName].test.ts` in same directory as type
- Import `expectTypeOf` directly from `vitest` (not `expect-type`)
- Use either `test` or `it` for test cases (both are acceptable)
- Test BOTH base type AND T-prefixed interface using `Call<TTypeName<...>>`
- Cover: edge cases (empty/zero), basic usage, complex scenarios, type combinations
- Use descriptive test names in plain English (e.g., "should return chunks when start is less than end")

```typescript
import { describe, expectTypeOf, it } from "vitest";
import type { Call } from "@ibnlanre/types";
import type { TypeName, TTypeName } from "./TypeName";

describe("TypeName", () => {
  it("should return expected result for basic case", () => {
    type Result = TypeName<...>;
    type TResult = Call<TTypeName<...>>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
    expectTypeOf<TResult>().toEqualTypeOf<Expected>();
  });

  it("should return expected result for edge case", () => {
    type Result = TypeName<...>;
    expectTypeOf<Result>().toExtend<Expected>();
  });
});
```

### Building & Publishing

```bash
pnpm bundle      # Build with tsup (ESM only, minified, tree-shaken)
pnpm dry-run     # Test package before publishing
pnpm package     # Publish to npm (requires auth)
```

Build output: `dist/index.js` and `dist/index.d.ts` (single bundle)

### Diagnostics

```bash
# Check type instantiation performance (12GB memory allocation)
pnpm diagnostics

# Standard type checking
pnpm ts-check
```

## Documentation Standards

Every exported type requires JSDoc with:

````typescript
/**
 * [One-sentence summary of what the type does]
 *
 * [Detailed explanation of behavior and mechanics]
 *
 * @template Param1 - Description of first parameter
 * @template Param2 - Description of second parameter (if applicable)
 *
 * @example
 * ```typescript
 * type Result1 = TypeName<...>;
 * // Expected: [comment showing result]
 *
 * type Result2 = TypeName<...>;
 * // Expected: [comment showing result]
 * ```
 */
export type TypeName<...> = ...
````

Include 2-4 examples showing: basic usage, edge cases, different type combinations, real-world scenarios.

## Common Patterns

### Helper Type Pattern

Complex types use private helper types for recursion:

```typescript
type TypeNameHelper<...> = /* recursive logic */;

export type TypeName<Input> = Input extends Pattern
  ? TypeNameHelper<...>
  : BaseCase;
```

### Parameter Pre-computation

```typescript
type Helper<
  Start extends number,
  End extends number,
  ChunkSize extends number,
  Result extends unknown[] = [],
  // Pre-computed values reduce instantiation depth
  Difference extends number = Subtract<End, Start>,
  IsLarge extends Bit = GreaterThan<Difference, ChunkSize>,
  MidPoint extends number = Add<Start, ChunkSize>
> = Equal<Start, End> extends 1
  ? Result
  : IsLarge extends 1
  ? Helper<MidPoint, End, ChunkSize, Push<Result, [Start, MidPoint]>>
  : Push<Result, [Start, End]>;
```

Only pass changing parameters to recursive calls; TypeScript recalculates defaults automatically.

### Branch Decomposition

For types with many cases (like `AdvancedFormat`), split into focused helper types:

```typescript
export type MainType<In, Out> =
  In extends "case1" | "case2"
    ? Case1Branch<In, Out>
    : In extends "case3" | "case4"
    ? Case3Branch<In, Out>
    : DefaultCase;

type Case1Branch<In, Out, Field = Get<Out, "field">> = /* focused logic */;
```

## Integration Points

- **External**: No runtime dependencies, exports only TypeScript types
- **Build**: tsup bundler with tree-shaking and minification
- **Testing**: Vitest with typecheck mode (experimental feature, pin version)
- **Linting**: Biome (configured in `biome.json`)

## Critical Files

- `.github/instructions/generic-type-creation.instructions.md` - Performance optimization guide (REQUIRED reading for complex types)
- `src/function/fn/Fn.ts` - Core composition interface
- `src/index.ts` - Main export barrel (all public APIs)
- `vitest.config.ts` - Test configuration (typecheck mode enabled)
- `tsup.config.ts` - Build configuration

## Quick Reference

When creating a new type utility:

1. Create directory: `src/category/type-name/`
2. Add `TypeName.ts` with base type + T-prefixed interface
3. Add JSDoc with 2-4 examples
4. Create `TypeName.test.ts` with comprehensive coverage
5. Add `index.ts` re-export
6. Export from parent category `index.ts`
7. Run `pnpm test` to validate
