# TypeScript Type-Level Performance Guidelines

**Context:** `@ibnlanre/types` utility library  
**Target Files:** `**/*.{ts,tsx}`

---

## The Core Problem: Spread Operations in Type-Level Code

TypeScript's type system struggles with spread operators (`...`) when processing arrays. Each spread forces TypeScript to expand and instantiate every element individually, leading to exponential complexity growth.

### Performance Impact

```typescript
// ❌ Problematic: O(n) expansion per operation
type SlowFlat<T extends unknown[][]> = T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? [...First, ...(Rest extends unknown[][] ? SlowFlat<Rest> : [])]
    : SlowFlat<Rest>
  : [];

// Result: Fails around 50-100 elements with "Type instantiation is excessively deep"
```

**Why this fails:**

- Each `...` operator triggers full type instantiation
- Recursive calls compound the problem exponentially
- TypeScript's recursion depth limit (currently ~50 levels) is reached quickly

---

## Solution: Structural Type Operations

Instead of spreading, work with array structure using conditional type inference and avoid expanding contents.

### ✅ Recommended Pattern

```typescript
type StructuralFlat<
  T extends unknown[][],
  Acc extends unknown[] = []
> = T extends [infer Head extends unknown[], ...infer Tail extends unknown[][]]
  ? StructuralFlat<Tail, [...Acc, ...Head]> // Still uses spread but defers expansion
  : Acc;
```

**Better approach using library utilities:**

```typescript
// If library has Concat utility
type OptimalFlat<
  T extends unknown[][],
  Acc extends unknown[] = []
> = T extends [infer Head extends unknown[], ...infer Tail extends unknown[][]]
  ? OptimalFlat<Tail, Concat<Acc, Head>> // No spreading in result
  : Acc;
```

---

## Available Library Utilities

Based on `@ibnlanre/types@0.3.2`, use these utilities instead of manual operations:

### Arithmetic Operations

- `Add<A, B>` — Addition (avoiding `[...Array, ...Array]` patterns)
- `Subtract<A, B>` — Subtraction
- `Multiply<A, B>` — Multiplication
- `Divide<A, B>` — Division
- `Modulo<A, B>` — Remainder operation
- `Absolute<N>` — Absolute value

### Comparison Operations

- `Compare<A, B>` — Returns comparison result
- `Equal<A, B>` — Type-level equality
- `GreaterThan<A, B>` — Numeric comparison
- `LessThan<A, B>` — Numeric comparison

### Logical Operations

- `And<A, B>` — Bitwise AND
- `Or<A, B>` — Bitwise OR
- `Xor<A, B>` — Bitwise XOR
- `Not<A>` — Logical NOT

### Object Operations

- `Paths<T, Delimiter, Level>` — Extract all paths from an object
- `PathValue<T, Path, Delimiter>` — Get value at path
- `OptionalKeyMap<T, K>` — Filter optional keys
- `RequiredKeyMap<T, K>` — Filter required keys

### Function Composition

- `Fn.Arguments<F>` — Extract function arguments
- `Fn.Apply<F, Args>` — Apply arguments to function type
- `Fn.Return<F>` — Extract return type

### Type Utilities (T-Prefixed)

Higher-order type functions (curried versions):

- `TAdd<N>` — Partially applied addition
- `TAnd`, `TOr`, `TXor`, `TNot` — Logical operations
- `TAbsolute` — Absolute value function
- `TCompare<N>` — Comparison function

---

## Performance Optimization Techniques

### 1. Prefer Utility Types Over Manual Operations

```typescript
// ❌ Manual spreading
type ManualRange<
  Start extends number,
  End extends number,
  Acc extends number[] = []
> = Start extends End
  ? [...Acc, End]
  : ManualRange<Add<Start, 1>, End, [...Acc, Start]>; // Slow!

// ✅ Use library arithmetic
type OptimizedRange<
  Start extends number,
  End extends number,
  Acc extends number[] = []
> = Equal<Start, End> extends 1
  ? Acc // No final spread needed if properly accumulated
  : OptimizedRange<Add<Start, 1>, End, Acc>; // Uses library's Add
```

### 2. Pre-compute in Type Parameters

Move expensive calculations to parameter defaults where TypeScript evaluates them once during type assignment.

```typescript
// ❌ Computing in body
type Slow<N extends number> = {
  doubled: Multiply<N, 2>;
  tripled: Multiply<N, 3>;
  quadrupled: Multiply<Multiply<N, 2>, 2>; // Nested computation
};

// ✅ Pre-compute in parameters
type Fast<
  N extends number,
  Doubled extends number = Multiply<N, 2>,
  Tripled extends number = Multiply<N, 3>,
  Quadrupled extends number = Multiply<Doubled, 2>
> = {
  doubled: Doubled;
  tripled: Tripled;
  quadrupled: Quadrupled;
};
```

**Key principle:** TypeScript caches default parameter computations during type instantiation.

### 3. Use Inference Types for Structure Extraction

```typescript
// Extract structure without expanding
type ProcessList<T> = T extends [infer Head, ...infer Tail]
  ? ProcessHead<Head, ProcessList<Tail>>
  : [];

// For objects, use path utilities
type ExtractDeep<T> = Paths<T> extends infer AllPaths
  ? { [K in AllPaths]: PathValue<T, K> }
  : never;
```

### 4. Tail Recursion Patterns

Keep recursive calls in tail position for better optimization.

```typescript
// ✅ Tail recursive with accumulator
type TailRecursive<
  T extends unknown[],
  Acc extends SomeType = InitialValue
> = T extends [infer Head, ...infer Tail]
  ? TailRecursive<Tail, ProcessWithAcc<Acc, Head>>
  : Acc;

// ❌ Not tail recursive
type NotTailRecursive<T extends unknown[]> = T extends [
  infer Head,
  ...infer Tail
]
  ? MergeResults<ProcessHead<Head>, NotTailRecursive<Tail>> // Merge after recursion
  : [];
```

### 5. Mapped Types for Parallel Processing

When possible, use mapped types instead of recursive iteration.

```typescript
// ✅ Parallel transformation
type TransformAll<T extends readonly unknown[]> = {
  [K in keyof T]: Transform<T[K]>;
};

// ❌ Sequential recursion (slower for large arrays)
type TransformSequential<T extends unknown[]> = T extends [
  infer Head,
  ...infer Tail
]
  ? [Transform<Head>, ...TransformSequential<Tail>]
  : [];
```

---

## When to Apply These Techniques

Apply these optimizations when you encounter:

| Scenario                 | Why Optimize                | Recommended Approach                            |
| ------------------------ | --------------------------- | ----------------------------------------------- |
| Arrays with 50+ elements | Risk of recursion limits    | Use accumulator pattern + library utilities     |
| Nested recursion         | Exponential complexity      | Pre-compute in parameters, use tail recursion   |
| Mathematical operations  | Repeated calculations       | Use `Add`, `Multiply`, `Subtract` from library  |
| Object path traversal    | Deep nesting complexity     | Use `Paths<T>` and `PathValue<T, P>`            |
| Conditional logic        | Type instantiation overhead | Use `And`, `Or`, `Not`, `Equal`                 |
| Array building           | Spread operations           | Accumulate without spreading until final result |

---

## Common Errors and Solutions

### Error: "Type instantiation is excessively deep and possibly infinite"

**Cause:** Too many recursive calls or spread operations.

**Solutions:**

1. Add accumulator parameter to convert to tail recursion
2. Use library utilities instead of manual operations
3. Pre-compute intermediate values in type parameters
4. Check for infinite loops (missing base cases)

### Error: "Type produces a union type that is too complex to represent"

**Cause:** Combinatorial explosion from conditional types.

**Solutions:**

1. Use `Equal<A, B>` instead of `A extends B ? true : false` patterns
2. Constrain generics more strictly
3. Break complex types into smaller, named intermediate types

---

## Best Practices Checklist

When writing type-level code in this library:

- [ ] Use library's arithmetic operations (`Add`, `Subtract`, etc.) instead of tuple length tricks
- [ ] Use library's comparison operations (`Equal`, `GreaterThan`) instead of extends checks
- [ ] Pre-compute expensive calculations in type parameter defaults
- [ ] Minimize spread operations; use accumulator pattern instead
- [ ] Use tail recursion (accumulator as last parameter)
- [ ] Prefer mapped types over recursive iteration when possible
- [ ] Use `Paths<T>` for object traversal instead of manual recursion
- [ ] Add base cases to prevent infinite recursion
- [ ] Test with realistic data sizes (100+ elements if applicable)

---

## Real-World Pattern: Optimized Range

```typescript
// Efficient range generation using library utilities
type Range<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Current extends number = Start,
  IsComplete extends 1 | 0 = Equal<Current, End>
> = IsComplete extends 1
  ? [...Result, End] // Only spread at the very end
  : Range<
      Start,
      End,
      [...Result, Current],
      Add<Current, 1> // Use library's Add
    >;

// Usage: Range<0, 100> generates [0, 1, 2, ..., 100]
```

**Key optimizations:**

- Single accumulator to minimize spreads
- `Equal` check from library for clean conditionals
- `Add` from library instead of complex increment logic
- Pre-computed `IsComplete` in parameters

---

## Additional Notes

### Function Type Composition

The library provides function composition utilities with the `Fn` namespace:

```typescript
// Extract argument types
type Args = Fn.Arguments<(a: string, b: number) => void>; // [string, number]

// Apply arguments to function type
type Result = Fn.Apply<SomeFunction, [arg1, arg2]>;
```

### Higher-Order Type Functions

T-prefixed types are curried versions for composition:

```typescript
// Regular: Add<5, 3> = 8
// Curried: Apply<TAdd<5>, [3]> = 8

// Useful for mapping operations
type AddFive = TAdd<5>;
type Results = {
  [K in keyof Numbers]: Apply<AddFive, [Numbers[K]]>;
};
```

---

## References

- Library: `@ibnlanre/types@0.3.2`
- Full API: https://docsmill.dev/npm/@ibnlanre/types@0.3.2
- Key principle: **Defer expansion, use structure**

## Overview

This guide addresses performance bottlenecks in TypeScript's type system when processing large arrays. Following these patterns will help you avoid recursion limits and "Type instantiation is excessively deep" errors.

---

## Core Problem: The Spreading Bottleneck

The spread operator (`...`) in type-level code forces TypeScript to expand every element individually, causing exponential performance degradation.

### ❌ Anti-Pattern: Spreading

```typescript
type Problematic<Arrays extends unknown[][]> = Arrays extends [
  infer First,
  infer Second,
  ...infer Rest
]
  ? [...First, ...Second, ...ProcessRest<Rest>] // Expands all elements
  : [];
```

**Issues:**

- O(n) expansion per operation
- Recursion limit at ~50-100 elements
- Exponential memory usage

---

## Solution Framework

### Strategy 1: Structural Operations Over Spreading

Replace spread operations with utility types that work with array structure, not content.

### ✅ Optimized Pattern

```typescript
type TailArray<Head extends unknown[], Rest extends unknown[][]> = [
  Head,
  ...Rest
];

type StructuralFlat<
  Arrays extends unknown[][],
  Result extends unknown[] = []
> = Arrays extends []
  ? Result
  : Arrays extends TailArray<infer Head, infer Rest>
  ? StructuralFlat<Rest, Concat<Result, Head>> // Structural concatenation
  : never;
```

**Benefits:**

- O(log n) structural processing
- Scales to 1000+ elements
- Minimal type instantiation depth

---

## Implementation Techniques

### 1. Use Utility Types Instead of Spreading

| Operation      | ❌ Avoid          | ✅ Use Instead     |
| -------------- | ----------------- | ------------------ |
| Combine arrays | `[...A, ...B]`    | `Concat<A, B>`     |
| Append element | `[...A, Element]` | `Push<A, Element>` |

**Decision Guide:**

- **`Concat<A, B>`** — Merging two arrays
- **`Push<A, Element>`** — Adding single elements

---

### 2. Type-Specific Inference Patterns

Use inference types to extract structure without expanding content.

```typescript
// Array inference
type ProcessChunks<T> = T extends InferArray<infer Chunks, SomeType>
  ? StructuralProcess<Chunks>
  : never;

// Number inference
type ProcessNumbers<T> = T extends InferNumber<infer Value>
  ? DoMath<Value>
  : never;

// String inference
type ProcessStrings<T> = T extends InferString<infer Value>
  ? Transform<Value>
  : never;

// Object inference
type ProcessObjects<T> = T extends InferObject<infer Value>
  ? Process<Value>
  : never;
```

**Available Inference Types:**

| Type                        | Use Case               |
| --------------------------- | ---------------------- |
| `InferArray<Value[], Type>` | Typed arrays           |
| `InferNumber<Value>`        | Number literals/types  |
| `InferString<Value>`        | String literals/types  |
| `InferObject<Value>`        | Object types           |
| `InferBoolean<Value>`       | Boolean literals/types |
| `InferNull<Value>`          | Null type              |
| `InferUndefined<Value>`     | Undefined type         |
| `InferSymbol<Value>`        | Symbol type            |

---

### 3. Cluster-Based Processing

Process arrays by extracting head/tail patterns rather than spreading.

```typescript
type TailPattern<First extends T, Rest extends T[]> = [First, ...Rest];
type HeadPattern<Rest extends T[], Last extends T> = [...Rest, Last];

type Process<List extends T[]> = List extends TailPattern<
  infer First,
  infer Rest
>
  ? ProcessHead<First, Process<Rest>>
  : BaseCase;
```

---

### 4. Parallel Processing with Mapped Types

Transform arrays in parallel instead of sequentially.

```typescript
type ParallelProcess<List extends unknown[]> = {
  [K in keyof List]: List[K] extends SomeCondition
    ? TransformItem<List[K]>
    : never;
};
```

---

### 5. Mathematical Pre-computation

Calculate structure upfront, then apply transformations.

```typescript
type OptimalSize = Divide<TotalSize, BatchSize>;
type ChunkCount = Ceil<OptimalSize>;

// Use mapped types on pre-computed structure
type ProcessedChunks = {
  [K in keyof PreComputedRanges]: ProcessChunk<PreComputedRanges[K]>;
};
```

---

### 6. Parameter-Level Pre-computation (Critical Optimization)

**Key Principle:** Perform expensive calculations in type parameter defaults, not in the type body.

#### ❌ Anti-Pattern: Body-Level Computation

```typescript
type Expensive<Start extends number, End extends number> = Enumerate<
  Add<Start, Multiply<ChunkSize, Value>>, // Computed during execution
  Min<Add<Add<Start, Multiply<ChunkSize, Value>>, StepValue>, End>, // Nested!
  Step
>;
```

#### ✅ Optimized: Parameter-Level Computation

```typescript
type ChunkHelper<
  Start extends number,
  End extends number,
  ChunkSize extends number,
  Result extends unknown[] = [],
  // Pre-compute all derived values here
  Difference extends number = Subtract<End, Start>,
  IsLarge extends Bit = GreaterThan<Difference, ChunkSize>,
  MidPoint extends number = Add<Start, ChunkSize>
> = Equal<Start, End> extends 1
  ? Result
  : IsLarge extends 1
  ? ChunkHelper<
      MidPoint, // Only pass changing values
      End,
      ChunkSize,
      Push<Result, [Start, MidPoint]> // TypeScript auto-recalculates rest
    >
  : Push<Result, [Start, End]>;
```

**Why This Works:**

1. **Assignment-phase calculation** — TypeScript resolves defaults during type assignment, not during body execution
2. **Reduced instantiation depth** — Intermediate values are named and cached
3. **Automatic recalculation** — Only pass changed parameters; TypeScript recomputes defaults
4. **Clear dependencies** — Named parameters show calculation flow

**Best Practices:**

- ✅ Pre-compute expensive operations in parameter defaults
- ✅ Use clear, descriptive names for intermediate values
- ✅ Only pass essential changing parameters to recursive calls
- ✅ Let TypeScript recalculate derived parameters automatically
- ❌ Don't nest calculations in the type body
- ❌ Don't duplicate calculations across multiple locations

---

## When to Apply These Techniques

Use these optimizations when you encounter:

- ✅ Arrays with **100+ elements**
- ✅ **Recursive array processing**
- ✅ **Range generation** or enumeration
- ✅ **Complex mathematical computations** at the type level
- ✅ **Multiple dependent calculations** in a single type
- ✅ Errors: _"Type instantiation is excessively deep and possibly infinite"_

---

## Performance Comparison

| Approach                      | Complexity    | Max Elements | Notes                              |
| ----------------------------- | ------------- | ------------ | ---------------------------------- |
| **Spreading**                 | O(n) per op   | ~50-100      | Hits recursion limits quickly      |
| **Inference**                 | O(log n)      | 1000+        | Structural processing              |
| **Parameter Pre-computation** | O(1) overhead | 1000+        | Reduces instantiation depth        |
| **Combined Techniques**       | O(log n)      | 1000+        | Optimal for large-scale operations |

---

## Real-World Example

See `Range.ts` for a complete implementation demonstrating these techniques in action. It efficiently processes thousands of numbers without hitting TypeScript's recursion limits.

---

## Quick Reference Checklist

When writing type-level array code, ask:

1. ✅ Am I using `Concat`/`Push` instead of spreading?
2. ✅ Are expensive calculations in parameter defaults?
3. ✅ Am I inferring structure instead of expanding content?
4. ✅ Can this be parallelized with mapped types?
5. ✅ Have I pre-computed mathematical operations?

Following these patterns will keep your type-level code performant and maintainable.

---

## Modular Decomposition Of Complex Types

Large conditional types often accumulate many defaulted generics and nested computations. Decompose the logic into small, focused helper types so only the data needed for the current branch is instantiated.

Key ideas:

- Branch-specific helpers: Create a tiny helper per token/case (e.g., day-of-year branch, hour-of-day branch). Each helper computes just what it needs.
- On-demand computation: Avoid computing year/month/day/timestamp/etc. up front. Let each branch infer and compute its own minimal subset.
- Shallow instantiation: Splitting logic prevents deep generic defaults from being carried through every branch, reducing “excessively deep” errors.
- Reusability and clarity: Named helper types document intent, improve readability, and make refactors safer.

Pattern (conceptual):

- Top-level dispatcher maps input to a small set of branch helpers.
- Each branch helper:
  - Extracts only the fields it needs via Get<…> or similar utilities
  - Performs minimal arithmetic/string ops
  - Returns the final literal result for that branch

This approach complements parameter pre-computation and structural processing, producing predictable performance across many tokens/cases.

---

## Expand Meta-Tokens Then Reprocess

When a format language includes “meta” tokens (shortcuts that expand to other tokens), expand them to their concrete representation and then re-run the same dispatcher on the expanded string.

Guidelines:

- Expansion-first: Convert meta-token to its explicit pattern string.
- Re-parse: Feed the expanded pattern back into the same processing pipeline so existing branches handle it uniformly.
- Preserve context: If expansion happens mid-parse, stitch the expanded content back together with the remaining input and continue.

Benefits:

- Eliminates special cases in the core formatter
- Keeps branch logic simple and uniform
- Avoids deep nesting from in-place replacements
