import { Subtract, GtOrEq, Add, Gt, Lt, LtOrEq, Mod, Abs, Bit, IsPositive, And, Pow, Divide, Multiply, Compare, Eq, IsEven, IsInt, IsNegative, IsNotInt, IsOdd, Max, Min, Negate, Not, Or, Xor } from 'ts-arithmetic';
export { Abs, Add, And, Bit, Compare, Divide, Eq, Gt, GtOrEq, IsEven, IsInt, IsNegative, IsNotInt, IsOdd, IsPositive, Lt, LtOrEq, Max, Min, Mod, Multiply, Negate, Not, Or, Pow, Subtract, Xor } from 'ts-arithmetic';

type Append<Text extends string, Segment extends string> = `${Text}${Segment}`;
interface TAppend<Segment extends string | void = void, Text extends string | void = void> extends Fn<{
    0: string;
    1: string;
}> {
    slot: [Segment, Text];
    data: Append<this[1], this[0]>;
}

type Contains<Text extends string, Segment extends Serializable> = Text extends `${string}${Segment}${string}` ? 1 : 0;
interface TContains<Segment extends Serializable | void = void, Text extends string | void = void> extends Fn<{
    0: Serializable;
    1: string;
}> {
    slot: [Segment, Text];
    data: Contains<this[1], this[0]>;
}

type EndsWith<Text extends string, Segment extends Serializable> = Text extends `${string}${Segment}` ? 1 : 0;
interface TEndsWith<Segment extends Serializable | void = void, Text extends string | void = void> extends Fn<{
    0: Serializable;
    1: string;
}> {
    slot: [Segment, Text];
    data: EndsWith<this[1], this[0]>;
}

type Length<Text extends Serializable> = Split<Stringify<Text>>["length"];
interface TLength<Text extends Serializable | void = void> extends Fn<{
    0: Serializable;
}> {
    slot: [Text];
    data: Length<this[0]>;
}

type PadEnd<Text extends string, Size extends number, Suffix extends string = "0"> = Length<Text> extends Size ? Text : PadEnd<Append<Text, Suffix>, Size, Suffix>;
interface TPadEnd<Size extends number | void = void, Suffix extends string | void = "0", Text extends string | void = void> extends Fn<{
    0: number;
    1: string;
    2: string;
}> {
    slot: [Size, Suffix, Text];
    data: PadEnd<this[2], this[0], this[1]>;
}

type PadStart<Text extends string, Size extends number, Prefix extends string = "0"> = Length<Text> extends Size ? Text : PadStart<Prepend<Text, Prefix>, Size, Prefix>;
interface TPadStart<Size extends number | void = void, Prefix extends string | void = "0", Text extends string | void = void> extends Fn<{
    0: number;
    1: string;
    2: string;
}> {
    slot: [Size, Prefix, Text];
    data: PadStart<this[2], this[0], this[1]>;
}

type Pattern<Text extends Serializable, StartsWith extends Serializable = "", EndsWith extends Serializable = ""> = `${StartsWith}${Text}${EndsWith}`;
interface TPattern<StartsWith extends Serializable | void = "", EndsWith extends Serializable | void = "", Text extends Serializable | void = void> extends Fn<{
    0: Serializable;
    1: Serializable;
    2: Serializable;
}> {
    slot: [StartsWith, EndsWith, Text];
    data: Pattern<this[2], this[0], this[1]>;
}

type PlaceHelper<Text extends string, Segment extends string, Index extends number> = `${Substring<Text, 0, Index>}${Segment}${Substring<Text, Index, Length<Text>>}`;
type Place<Text extends string, Segment extends string, Index extends number> = LastOfUnion<Index> extends infer L ? IsNever<L> extends 1 ? Text : L extends number ? Place<PlaceHelper<Text, Segment, IndexAt<Length<Text>, L>>, Segment, Exclude<Index, L>> : Text : never;
interface TPlace<Segment extends string | void = void, Index extends number | void = void, Text extends string | void = void> extends Fn<{
    0: string;
    1: number;
    2: string;
}> {
    slot: [Segment, Index, Text];
    data: Place<this[2], this[0], this[1]>;
}

type Prepend<Text extends string, Segment extends string> = `${Segment}${Text}`;
interface TPrepend<Segment extends string | void = void, Text extends string | void = void> extends Fn<{
    0: string;
    1: string;
}> {
    slot: [Segment, Text];
    data: Prepend<this[1], this[0]>;
}

type ReplaceHelper<Text extends string, Search extends string, Replacement extends string> = Text extends `${infer X}${Search}${infer U}` ? `${X}${Replacement}${ReplaceHelper<U, Search, Replacement>}` : Text;
type Replace<Text extends string, Search extends string, Replacement extends string> = LastOfUnion<Search> extends infer L ? IsNever<L> extends 1 ? Text : L extends string ? Replace<ReplaceHelper<Text, L, Replacement>, Exclude<Search, L>, Replacement> : Text : never;
interface TReplace<Search extends string | void = void, Replacement extends string | void = void, Text extends string | void = void> extends Fn<{
    0: string;
    1: string;
    2: string;
}> {
    slot: [Search, Replacement, Text];
    data: Replace<this[2], this[0], this[1]>;
}

type SplitHelper<Text extends string, Delimiter extends string> = Text extends `${infer T}${Delimiter}${infer U}` ? [T, ...SplitHelper<U, Delimiter>] : [Text];
type FinalSplit<Text extends string, Delimiter extends string = "<>"> = SplitHelper<Text, Delimiter>;
type DefaultOptions = {
    treatConsecutiveDelimitersAsOne: false;
    removeEmptyEntries: false;
};
type Split<Text extends string, Delimiter extends string = "", Options extends {
    treatConsecutiveDelimitersAsOne: boolean;
} = DefaultOptions> = LastOfUnion<Delimiter> extends infer L ? IsNever<L> extends 1 ? Options["treatConsecutiveDelimitersAsOne"] extends true ? FinalSplit<Replace<Text, "<><>", "<>">> : FinalSplit<Text> : L extends string ? Split<Join<SplitHelper<Text, L>, "<>">, Exclude<Delimiter, L>, Options> : never : never;
interface TSplit<Delimiter extends string | void = void, Options extends {
    treatConsecutiveDelimitersAsOne: boolean;
} | void = DefaultOptions, Text extends string | void = void> extends Fn<{
    0: string;
    1: {
        treatConsecutiveDelimitersAsOne: boolean;
        removeEmptyEntries: boolean;
    };
    2: string;
}> {
    slot: [Delimiter, Options, Text];
    data: Split<this[2], this[0], this[1]>;
}

type StartsWith<Text extends string, Segment extends Serializable> = Text extends `${Segment}${string}` ? 1 : 0;
interface TStartsWith<Segment extends Serializable | void = void, Text extends string | void = void> extends Fn<{
    0: Serializable;
    1: string;
}> {
    slot: [Segment, Text];
    data: StartsWith<this[1], this[0]>;
}

type Serializable$1 = string | number | boolean | null;
type ArrayToString<Input extends any[]> = `[${Join<Input>}]`;
type ObjectToString<Input extends Record<string, any>> = Join<UnionToTuple<{
    [K in keyof Input]: `${Stringify<K>}: ${Stringify<Input[K]>}`;
}[keyof Input]>, ", ">;
type Stringify<Input> = Input extends string ? Input : Input extends Serializable$1 ? `${Input}` : Input extends any[] ? ArrayToString<Input> : Input extends Record<string, any> ? ObjectToString<Input> : never;
interface TStringify<Input extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Input];
    data: Stringify<this[0]>;
}

type Substring<Text extends string, Start extends number, End extends number> = Join<Slice<Split<Text>, Start, End>>;
interface TSubstring<Start extends number | void = void, End extends number | void = void, Text extends string | void = void> extends Fn<{
    0: number;
    1: number;
    2: string;
}> {
    slot: [Start, End, Text];
    data: Substring<this[2], this[0], this[1]>;
}

type Trim<Text extends string, Count extends number = -1, Letter extends string = "0"> = TrimStart<TrimEnd<Text, Count, Letter>, Count, Letter>;
interface TTrim<Count extends number | void = -1, Letter extends string | void = "0", Text extends string | void = void> extends Fn<{
    0: number;
    1: string;
    2: string;
}> {
    slot: [Count, Letter, Text];
    data: Trim<this[2], this[0], this[1]>;
}

type TrimEndHelper<Text extends string, Count extends number, Letter extends string = "0"> = Text extends `${infer U}${Letter}` ? TrimEnd<U, Subtract<Count, 1>, Letter> : Text;
type TrimEnd<Text extends string, Count extends number = -1, Letter extends string = "0"> = Count extends -1 ? Text extends `${infer U}${Letter}` ? TrimEndHelper<U, Count, Letter> : Text : Count extends 0 ? Text : TrimEndHelper<Text, Count, Letter>;
interface TTrimEnd<Count extends number | void = -1, Letter extends string | void = "0", Text extends string | void = void> extends Fn {
    slot: [Count, Letter, Text];
    data: TrimEnd<this[2], this[0], this[1]>;
}

type TrimStartHelper<Text extends string, Count extends number, Letter extends string = "0"> = Text extends `${Letter}${infer U}` ? TrimStart<U, Subtract<Count, 1>, Letter> : Text;
type TrimStart<Text extends string, Count extends number = -1, Letter extends string = "0"> = Count extends -1 ? Text extends `${Letter}${infer U}` ? TrimStartHelper<U, Count, Letter> : Text : Count extends 0 ? Text : TrimStartHelper<Text, Count, Letter>;
interface TTrimStart<Count extends number | void = -1, Letter extends string | void = "0", Text extends string | void = void> extends Fn {
    slot: [Count, Letter, Text];
    data: TrimStart<this[2], this[0], this[1]>;
}

type ObjectHelper<ObjectType extends Dictionary, PickType extends Dictionary<string, Paths<ObjectType>>> = {
    [Key in keyof PickType]: Get<ObjectType, PickType[Key]>;
};
type ArrayHelper<ObjectType extends Dictionary, PickType extends Paths<ObjectType>[]> = {
    [Key in PickType[number]]: Get<ObjectType, Key>;
};
type StringHelper<ObjectType extends Dictionary, PickType extends string> = {
    [Key in PickType]: Get<ObjectType, Key>;
};
type Collect<ObjectType extends Dictionary, PickType extends Dictionary<string, Paths<ObjectType>> | Paths<ObjectType>[] | Paths<ObjectType>> = Unionize<PickType extends Paths<ObjectType>[] ? ArrayHelper<ObjectType, PickType> : PickType extends Dictionary<string, Paths<ObjectType>> ? ObjectHelper<ObjectType, PickType> : PickType extends Paths<ObjectType> ? StringHelper<ObjectType, PickType> : never>;
interface TCollect<PickType extends Dictionary<string, Paths<Exclude<ObjectType, void>>> | Paths<Exclude<ObjectType, void>>[] | Paths<Exclude<ObjectType, void>> | void = void, ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary<string, Paths<Exclude<ObjectType, void>>> | Paths<Exclude<ObjectType, void>>[] | Paths<Exclude<ObjectType, void>>;
    1: Dictionary;
}> {
    slot: [PickType, ObjectType];
    data: Collect<this[1], this[0]>;
}

type CombineHelper<Source extends Dictionary[], Result extends Dictionary = {}> = Source extends [
    infer Head extends Dictionary,
    ...infer Rest extends Dictionary[]
] ? CombineHelper<Rest, Merge<Result, Head>> : Source extends Dictionary ? Merge<Result, Source> : Result;
type Combine<Source extends Dictionary[]> = CombineHelper<Source>;
interface TCombine<Source extends Dictionary[] | void = void> extends Fn<{
    0: Dictionary[];
}> {
    slot: [Source];
    data: Combine<this[0]>;
}

type DeepPartialHelper<ObjectType extends Dictionary, PathType extends string, Key extends string> = ObjectType[Key] extends Dictionary ? [PathType] extends [never] ? DeepPartial<ObjectType[Key]> : PathType extends `${Key}.${infer Tail}` ? DeepPartial<ObjectType[Key], Tail> : DeepPartial<ObjectType[Key], ""> : ObjectType[Key];
type DeepPartial<ObjectType extends Dictionary, PathType extends ArbitraryKey | Paths<ObjectType> = never> = [PathType] extends [never] ? {
    [Key in Keys<ObjectType>]?: DeepPartialHelper<ObjectType, PathType, Key>;
} : ObjectType extends Dictionary ? Intersect$1<{
    [Key in Exclude<RequiredKeys<ObjectType>, PathType>]: DeepPartialHelper<ObjectType, PathType, Key>;
} & {
    [Key in Exclude<OptionalKeys<ObjectType>, PathType>]?: DeepPartialHelper<ObjectType, PathType, Key>;
} & {
    [Key in IncludeKeys<ObjectType, PathType>]?: DeepPartialHelper<ObjectType, PathType, Key>;
}> : ObjectType;
interface TDeepPartial<PathType extends ArbitraryKey | Paths<Exclude<ObjectType, void>> | void = void, ObjectType extends Dictionary | void = void> extends Fn<{
    0: ArbitraryKey | Paths<Exclude<ObjectType, void>>;
    1: Dictionary;
}> {
    slot: [PathType, ObjectType];
    data: DeepPartial<this[1], this[0]>;
}

type DeepRequiredHelper<ObjectType extends Dictionary, PathType extends string, Key extends string> = ObjectType[Key] extends Dictionary ? [PathType] extends [never] ? DeepRequired<ObjectType[Key]> : PathType extends `${Key}.${infer Tail}` ? DeepRequired<ObjectType[Key], Tail> : DeepRequired<ObjectType[Key], ""> : ObjectType[Key];
type DeepRequired<ObjectType extends Dictionary, PathType extends ArbitraryKey | Paths<ObjectType> = never> = [PathType] extends [never] ? {
    [Key in Keys<ObjectType>]: RequireValue<DeepRequiredHelper<ObjectType, PathType, Key>>;
} : ObjectType extends Dictionary ? Intersect$1<{
    [Key in Exclude<RequiredKeys<ObjectType>, PathType>]: DeepRequiredHelper<ObjectType, PathType, Key>;
} & {
    [Key in Exclude<OptionalKeys<ObjectType>, PathType>]?: DeepRequiredHelper<ObjectType, PathType, Key>;
} & {
    [Key in IncludeKeys<ObjectType, PathType>]: RequireValue<DeepRequiredHelper<ObjectType, PathType, Key>>;
}> : ObjectType;
interface TDeepRequired<PathType extends ArbitraryKey | Paths<Exclude<ObjectType, void>> | void = void, ObjectType extends Dictionary | void = void> extends Fn<{
    0: ArbitraryKey | Paths<Exclude<ObjectType, void>>;
    1: Dictionary;
}> {
    slot: [PathType, ObjectType];
    data: DeepRequired<this[1], this[0]>;
}

type ExcludeKeys<ObjectType extends Dictionary, PathType extends ArbitraryKey | Paths<ObjectType> = never> = Exclude<Keys<ObjectType>, PathType>;
interface TExcludeKeys<PathType extends ArbitraryKey | Paths<Exclude<ObjectType, void>> | void = void, ObjectType extends Dictionary | void = void> extends Fn<{
    0: ArbitraryKey | Paths<Exclude<ObjectType, void>>;
    1: Dictionary;
}> {
    slot: [PathType, ObjectType];
    data: ExcludeKeys<this[1], this[0]>;
}

type ExtractNestedKeys<Text extends string, Delimiter extends string = "."> = Text extends `${string}${Delimiter}${infer Segment}` ? Segment : Text;
interface TExtractNestedKeys<Delimiter extends string | void = ".", Text extends string | void = void> extends Fn<{
    0: string;
    1: string;
}> {
    slot: [Delimiter, Text];
    data: ExtractNestedKeys<this[1], this[0]>;
}

type ExtractRootKey<Text extends string, Delimiter extends string = "."> = Text extends `${infer Segment}${Delimiter}${string}` ? Segment : Text;
interface TExtractRootKey<Delimiter extends string | void = ".", Text extends string | void = void> extends Fn<{
    0: string;
    1: string;
}> {
    slot: [Delimiter, Text];
    data: ExtractRootKey<this[1], this[0]>;
}

type FromEntries<EntryList extends any[][]> = {
    [Key in EntryList[number][0]]: Extract<EntryList[number], [Key, any]>[1];
};
interface TFromEntries<EntryList extends unknown[][] | void = void> extends Fn<{
    0: unknown[][];
}> {
    slot: [EntryList];
    data: FromEntries<this[0]>;
}

/**
 * Represents the value at a path in an object.
 *
 * @template ObjectType The type of the object.
 * @template Path The type of the path.
 * @template Delimiter The type of the delimiter.
 */
type Get<ObjectType extends Dictionary, Path extends Paths<ObjectType, Delimiter> | ArbitraryKey<number>, Fallback extends unknown = never, Delimiter extends string = "."> = Stringify<Path> extends Keys<ObjectType> ? ObjectType[Stringify<Path>] : Path extends `${infer Key}${Delimiter}${infer Rest}` ? ObjectType[Key] extends Dictionary ? Get<ObjectType[Key], Rest, Fallback> : Fallback : Fallback;
interface TGet<Path extends Paths<Exclude<ObjectType, void>, Exclude<Delimiter, void>> | ArbitraryKey<number> | void = void, Fallback extends unknown = never, Delimiter extends string | void = ".", ObjectType extends Dictionary | void = void> extends Fn<{
    0: Paths<Exclude<ObjectType, void>, Exclude<Delimiter, void>> | ArbitraryKey<number>;
    1: unknown;
    2: string;
    3: Dictionary;
}> {
    slot: [Path, Fallback, Delimiter, ObjectType];
    data: Get<this[3], this[0], this[1], this[2]>;
}

type Has<ObjectType extends Dictionary, Key extends string | number | symbol, Delimiter extends string = "."> = Key extends Paths<ObjectType, Delimiter> ? 1 : 0;
interface THas<Key extends string | number | symbol | void = void, Delimiter extends string | void = ".", ObjectType extends Dictionary | void = void> extends Fn<{
    0: string | number | symbol;
    1: string;
    2: Dictionary;
}> {
    slot: [Key, Delimiter, ObjectType];
    data: Has<this[2], this[0], this[1]>;
}

type IncludeKeys<ObjectType extends Dictionary, PathType extends ArbitraryKey | Paths<ObjectType> = never> = Extract<Keys<ObjectType>, PathType>;
interface TIncludeKeys<PathType extends ArbitraryKey | Paths<Exclude<ObjectType, void>> | void = void, ObjectType extends Dictionary | void = void> extends Fn<{
    0: ArbitraryKey | Paths<Exclude<ObjectType, void>>;
    1: Dictionary;
}> {
    slot: [PathType, ObjectType];
    data: IncludeKeys<this[1], this[0]>;
}

type JoinKeys<RootKey extends string, Key extends string, Delimiter extends string = "."> = RootKey extends "" ? Key : `${RootKey}${Delimiter}${Key}`;
interface TJoinKeys<Key extends string | void = void, Delimiter extends string | void = ".", RootKey extends string | void = void> extends Fn<{
    0: string;
    1: string;
    2: string;
}> {
    slot: [Key, Delimiter, RootKey];
    data: JoinKeys<this[2], this[0], this[1]>;
}

type Keys<ObjectType extends Dictionary> = keyof ObjectType extends undefined ? never : keyof ObjectType extends infer Keys extends string | number ? `${Keys}` : never;
interface TKeys<ObjectType extends Dictionary | void = void> extends Fn {
    slot: [ObjectType];
    data: Keys<this[0]>;
}

type KeysAsTupleHelper<ObjectType extends Dictionary, Keys extends any[] = []> = LastOfUnion<keyof ObjectType> extends infer Key ? [Key] extends [never] ? Keys : Key extends keyof ObjectType ? KeysAsTupleHelper<Omit<ObjectType, Key>, [Key, ...Keys]> : never : Keys;
type KeysAsTuple<ObjectType extends Dictionary> = KeysAsTupleHelper<ObjectType>;
interface TKeysAsTuple<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: KeysAsTuple<this[0]>;
}

type Merge<Source extends Dictionary, Target extends Dictionary> = Intersect$1<{
    [Key in keyof Source as Key extends keyof Target ? never : Key]: Source[Key];
} & {
    [Key in keyof Target as Key extends keyof Source ? never : Key]: Target[Key];
} & {
    [Key in keyof Source & keyof Target]: Source[Key] extends Dictionary ? Target[Key] extends Dictionary ? Merge<Source[Key], Target[Key]> : Target[Key] : Target[Key];
}>;
interface TMerge<Target extends Dictionary | void = void, Source extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
    1: Dictionary;
}> {
    slot: [Target, Source];
    data: Merge<this[1], this[0]>;
}

type Mutable<ObjectType extends Dictionary> = ObjectType extends Primitives | Indexable | Structures | Derivatives ? ObjectType : Intersect$1<{
    -readonly [K in keyof ObjectType]: ObjectType[K] extends Record<string, any> ? Mutable<ObjectType[K]> : ObjectType[K];
}>;
interface TMutable<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: Mutable<this[0]>;
}

type ObjectFromPath<Path extends string, Value extends any, Delimiter extends string = "."> = Path extends `${infer Head}${Delimiter}${infer Tail}` ? {
    [K in Head]: ObjectFromPath<Tail, Value>;
} : {
    [K in Path]: Value;
};
interface TObjectFromPath<Value extends unknown = void, Delimiter extends string | void = ".", Path extends string | void = void> extends Fn<{
    0: string;
    1: unknown;
    2: string;
}> {
    slot: [Value, Delimiter, Path];
    data: ObjectFromPath<this[2], this[0], this[1]>;
}

type OmitOptionalValues<ObjectType extends Dictionary> = ObjectType extends Primitives | Indexable | Structures | Derivatives ? ObjectType : Intersect$1<{
    [K in RequiredKeys<ObjectType>]: ObjectType[K] extends infer T ? T extends Dictionary ? OmitOptionalValues<T> : T : never;
}>;
interface TOmitOptionalValues<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: OmitOptionalValues<this[0]>;
}

type OmitPathHelper<ObjectType extends Dictionary, PathType extends string, Key extends string> = ObjectType[Key] extends Dictionary ? PathType extends `${Key}.${infer Tail}` ? OmitPath<ObjectType[Key], Tail> : OmitPath<ObjectType[Key]> : ObjectType[Key];
type OmitPath<ObjectType extends Dictionary, PathType extends Paths<ObjectType> | ArbitraryKey = ""> = ObjectType extends Dictionary ? Intersect$1<{
    [Key in Exclude<RequiredKeys<ObjectType>, PathType>]: OmitPathHelper<ObjectType, PathType, Key>;
} & {
    [Key in Exclude<OptionalKeys<ObjectType>, PathType>]?: OmitPathHelper<ObjectType, PathType, Key>;
}> : ObjectType;
interface TOmitPath<PathType extends Paths<Exclude<ObjectType, void>> | void = void, ObjectType extends Dictionary | void = void> extends Fn<{
    0: Paths<Exclude<ObjectType, void>>;
    1: Dictionary;
}> {
    slot: [PathType, ObjectType];
    data: OmitPath<this[1], this[0]>;
}

type OmitRequiredValues<ObjectType extends Dictionary> = ObjectType extends Dictionary ? Intersect$1<{
    [K in OptionalKeys<ObjectType>]: ObjectType[K] extends infer T ? T extends Dictionary ? OmitRequiredValues<T> : T : never;
}> : ObjectType;
interface TOmitRequiredValues<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: OmitRequiredValues<this[0]>;
}

type OptionalKeys<ObjectType extends Dictionary> = {
    [Key in Keys<ObjectType>]: IsPartial<ObjectType[Key]> extends 1 ? Key : never;
}[Keys<ObjectType>];
interface TOptionalKeys<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: OptionalKeys<this[0]>;
}

type OptionalKeysDeepHelper<ObjectType extends Dictionary, Root extends string = ""> = Elements<UnionToTuple<{
    [Key in Keys<ObjectType>]: IsPartial<ObjectType[Key]> extends 1 ? ObjectType[Key] extends Dictionary ? Key | OptionalKeysDeepHelper<ObjectType[Key], Key> : JoinKeys<Root, Key> : never;
}[Keys<ObjectType>]>>;
type OptionalKeysDeep<ObjectType extends Dictionary> = OptionalKeysDeepHelper<ObjectType>;
interface TOptionalKeysDeep<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: OptionalKeysDeep<this[0]>;
}

type PathsHelper<ObjectType extends Dictionary, Key extends string | number, Delimiter extends string, Level extends number> = Level extends 0 ? `${Key}` : Level extends -1 ? `${Key}` | `${Key}${Delimiter}${Paths<ObjectType, Delimiter>}` : `${Key}` | `${Key}${Delimiter}${Paths<ObjectType, Delimiter, Subtract<Level, 1>>}`;
/**
 * Get all the possible paths of an object
 *
 * @param ObjectType - The object to get the paths from
 * @param [Delimiter = "."] - The delimiter to use to separate the keys
 * @param [Level = -1] - The level to stop the recursion
 */
type Paths<ObjectType extends Dictionary, Delimiter extends string = ".", Level extends number = -1> = ObjectType extends Dictionary ? {
    [Key in Keys<ObjectType>]: Key extends string | number ? ObjectType[Key] extends infer ObjectType ? ObjectType extends Dictionary ? PathsHelper<ObjectType, Key, Delimiter, Level> : `${Key}` : never : never;
}[Keys<ObjectType>] : never;
interface TPaths<Delimiter extends string | void = ".", Level extends number | void = -1, ObjectType extends Dictionary | void = void> extends Fn<{
    0: string;
    1: number;
    2: Dictionary;
}> {
    slot: [Delimiter, Level, ObjectType];
    data: Paths<this[2], this[0], this[1]>;
}

type RequireValue<Value> = Exclude<Value, undefined> extends infer Value ? IsNever<Value> extends 1 ? undefined : Value : never;
interface TRequireValue<Value extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Value];
    data: RequireValue<this[0]>;
}

type RequiredKeys<ObjectType extends Dictionary> = {
    [Key in Keys<ObjectType>]: IsPartial<ObjectType[Key]> extends 1 ? never : Key;
}[Keys<ObjectType>];
interface TRequiredKeys<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: RequiredKeys<this[0]>;
}

type RequiredKeysDeepHelper<ObjectType extends Dictionary, Root extends string = ""> = Elements<UnionToTuple<{
    [Key in Keys<ObjectType>]: IsPartial<ObjectType[Key]> extends 0 ? ObjectType[Key] extends Dictionary ? Key | RequiredKeysDeepHelper<ObjectType[Key], Key> : JoinKeys<Root, Key> : never;
}[Keys<ObjectType>]>>;
type RequiredKeysDeep<ObjectType extends Dictionary> = RequiredKeysDeepHelper<ObjectType>;
interface TRequiredKeysDeep<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: RequiredKeysDeep<this[0]>;
}

type SetValueHelper<ObjectType extends Dictionary, PathType extends string, Key extends string, ValueType = never> = PathType extends `${Key}.${infer Tail}` ? ObjectType[Key] extends infer ObjectType ? ObjectType extends Dictionary ? SetValue<ObjectType, Tail, ValueType> : SetValue<ObjectFromPath<Tail, ValueType>> : never : PathType extends Key ? ValueType : ObjectType[Key] extends Dictionary ? SetValue<ObjectType[Key]> : ObjectType[Key];
type Setter<ObjectType extends Dictionary, PathType extends string, ValueType = never> = Intersect$1<{
    [Key in RequiredKeys<ObjectType> as [ValueType] extends [never] ? Exclude<Key, PathType> : Key]: SetValueHelper<ObjectType, PathType, Key, ValueType>;
} & {
    [Key in OptionalKeys<ObjectType> as [ValueType] extends [never] ? Exclude<Key, PathType> : Key]?: SetValueHelper<ObjectType, PathType, Key, ValueType>;
}>;
type SetValue<ObjectType extends Dictionary, PathType extends Paths<ObjectType> | ArbitraryKey = "", ValueType extends any = never> = ObjectType extends Primitives | Indexable | Structures | Derivatives ? ObjectType : PathType extends keyof ObjectType | `${infer Head}.${string}` | "" ? Head extends keyof ObjectType ? Setter<ObjectType, PathType, ValueType> : Intersect$1<Setter<ObjectType, PathType, ValueType> & ObjectFromPath<PathType, ValueType>> : [ValueType] extends [never] ? Setter<ObjectType, PathType> : {
    [Key in keyof ObjectType | PathType]: Key extends keyof ObjectType ? ObjectType[Key] : ValueType;
};
interface TSetValue<PathType extends Paths<Exclude<ObjectType, void>> | ArbitraryKey | void = void, ValueType extends unknown = never, ObjectType extends Dictionary | void = void> extends Fn<{
    0: Paths<Exclude<ObjectType, void>> | ArbitraryKey;
    1: unknown;
    2: Dictionary;
}> {
    slot: [PathType, ValueType, ObjectType];
    data: SetValue<this[2], this[0], this[1]>;
}

type ToEntries<ObjectType extends Dictionary> = UnionToTuple<{
    [Key in keyof ObjectType]: [Key, ObjectType[Key]];
}[keyof ObjectType]>;
interface TToEntries<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: ToEntries<this[0]>;
}

type ValuesHelper<ObjectType extends Dictionary, Values extends any[] = []> = LastOfUnion<keyof ObjectType> extends infer Key ? [Key] extends [never] ? Values : Key extends keyof ObjectType ? ValuesHelper<Omit<ObjectType, Key>, [ObjectType[Key], ...Values]> : never : Values;
type Values<ObjectType extends Dictionary> = ValuesHelper<ObjectType>;
interface TValues<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: Values<this[0]>;
}

type ArrayOfHelper<Length extends number, Element extends unknown, Result extends unknown[] = []> = Result["length"] extends Length ? Result : ArrayOfHelper<Length, Element, [Element, ...Result]>;
type ArrayOf<Length extends number, Element extends unknown = any> = ArrayOfHelper<Length, Element>;
interface TArrayOf<Length extends number | void = void, Element extends unknown | void = void> extends Fn<{
    0: number;
    1: unknown;
}> {
    slot: [Length, Element];
    data: ArrayOf<this[0], this[1]>;
}

type Concat<Left extends unknown[], Right extends unknown[]> = [
    ...Left,
    ...Right
];
interface TConcat<Right extends unknown[] | void = void, Left extends unknown[] | void = void> extends Fn<{
    0: unknown[];
    1: unknown[];
}> {
    slot: [Right, Left];
    data: Concat<this[1], this[0]>;
}

type Elements<List extends any[]> = List[number];
interface TElements<List extends unknown[]> extends Fn<{
    0: unknown[];
}> {
    slot: [List];
    data: Elements<this[0]>;
}

type Every<Callback extends Fn, List extends Inspect<Callback>[]> = List extends [] ? 1 : List extends [
    infer Element extends Inspect<Callback>,
    ...infer Rest extends Inspect<Callback>[]
] ? Element extends Inspect<Callback> ? Apply<Callback, [Element]> extends 1 ? Every<Callback, Rest> : 0 : 0 : 0;
interface TEvery<Callback extends Fn, List extends Inspect<Callback>[] | void = void> extends Fn<{
    0: Fn;
    1: Inspect<Callback>[];
}> {
    slot: [Callback, List];
    data: Every<this[0], this[1]>;
}

type Filter<Callback extends Fn, List extends Inspect<Callback>[]> = List extends [
    infer Element extends Inspect<Callback>,
    ...infer Rest extends Inspect<Callback>[]
] ? Apply<Callback, [Element]> extends 1 ? [Element, ...Filter<Callback, Rest>] : Filter<Callback, Rest> : [];
interface TFilter<Callback extends Fn, List extends Inspect<Callback> | void = void> extends Fn<{
    0: Fn;
    1: Inspect<Callback>;
}> {
    slot: [Callback, List];
    data: Filter<this[0], this[1]>;
}

type FlatHelper<List extends unknown[], Result extends unknown[] = []> = List extends [infer Head extends unknown[], ...infer Rest] ? FlatHelper<Rest, Concat<Result, Head>> : List extends [infer Head, ...infer Rest] ? FlatHelper<Rest, Push<Result, Head>> : Result;
type Flat<List extends unknown[]> = FlatHelper<List>;
interface TFlat<List extends unknown[] | void = void> extends Fn<{
    0: unknown[];
}> {
    slot: [List];
    data: Flat<this[0]>;
}

type Head$1<List extends any[]> = List extends [infer Head, ...any[]] ? Head : never;
interface THead<List extends unknown[] | void = void> extends Fn<{
    0: unknown[];
}> {
    slot: [List];
    data: Head$1<this[0]>;
}

type Includes<List extends any[], Element> = List extends [] ? 0 : List extends [infer Head, ...infer Rest] ? IsExactType<Head, Element> extends 1 ? 1 : Includes<Rest, Element> : 0;
interface TIncludes<Element extends unknown | void = void, List extends unknown[] | void = void> extends Fn<{
    0: unknown;
    1: unknown[];
}> {
    slot: [Element, List];
    data: Includes<this[1], this[0]>;
}

type IndexAtHelper<List extends any[], Index extends number> = `${Index}` extends `-${infer Index extends number}` ? Subtract<Size<List>, Index> extends infer Index ? Index extends number ? GtOrEq<Index, 0> extends 1 ? Index : never : never : never : Indices<List> extends infer Keys ? Index extends Keys ? Index : never : never;
type IndexAt<List extends any[] | number, Index extends number> = List extends any[] ? IndexAtHelper<List, Index> : List extends number ? IndexAtHelper<ArrayOf<List>, Index> : never;
interface TIndexAt<Index extends number | void = void, List extends unknown[] | number | void = void> extends Fn<{
    0: number;
    1: unknown[] | number;
}> {
    slot: [Index, List];
    data: IndexAt<this[1], this[0]>;
}

type Indices<List extends any[]> = Exclude<keyof List, keyof any[]> extends `${infer R extends number}` ? R : never;
interface TIndices<List extends unknown[] | void = void> extends Fn<{
    0: unknown[];
}> {
    slot: [List];
    data: Indices<this[0]>;
}

type Join<List extends any[], Separator extends string = ""> = List extends [infer Head, ...infer Rest] ? Rest extends [] ? Head : `${Stringify<Head>}${Separator}${Join<Rest, Separator>}` : "";
interface TJoin<Separator extends string | void = void, List extends unknown[] | void = void> extends Fn<{
    0: string;
    1: unknown[];
}> {
    slot: [Separator, List];
    data: Join<this[1], this[0]>;
}

type Map$1<Callback extends Fn, List extends Inspect<Callback>[]> = List extends [
    infer Element extends Inspect<Callback>,
    ...infer Rest extends Inspect<Callback>[]
] ? [Apply<Callback, [Element]>, ...Map$1<Callback, Rest>] : [];
interface TMap<Callback extends Fn, List extends Inspect<Callback>[] | void = void> extends Fn<{
    0: Fn;
    1: Inspect<Callback>[];
}> {
    slot: [Callback, List];
    data: Map$1<this[0], this[1]>;
}

type NonEmptyArray<T> = [T, ...T[]];

type Pop<List extends any[]> = List extends [...any, infer Tail] ? Tail : never;
interface TPop<List extends unknown[] | void = void> extends Fn<{
    0: unknown[];
}> {
    slot: [List];
    data: Pop<this[0]>;
}

type Push<List extends any[], Element> = [...List, Element];
interface TPush<Element extends unknown | void = void, List extends unknown[] | void = void> extends Fn<{
    0: unknown;
    1: unknown[];
}> {
    slot: [Element, List];
    data: Push<this[1], this[0]>;
}

type Range<From extends number, To extends number> = From extends To ? [From] : [From, ...Range<Add<From, 1>, To>];
interface TRange<From extends number | void = void, To extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [From, To];
    data: Range<this[0], this[1]>;
}

type Retrieve<List extends unknown, Index extends number = 0> = List extends {
    [K in Index]: infer Head;
} ? Head : never;
interface TRetrieve<Index extends number | void = void, List extends unknown | void = void> extends Fn<{
    0: number;
    1: unknown;
}> {
    slot: [Index, List];
    data: Retrieve<this[1], this[0]>;
}

type Reverse<List extends any[]> = List extends [
    infer Head,
    ...infer Rest
] ? [...Reverse<Rest>, Head] : [];
interface TReverse<List extends unknown[] | void = void> extends Fn<{
    0: unknown[];
}> {
    slot: [List];
    data: Reverse<this[0]>;
}

type Shift<List extends any[]> = List extends [any, ...infer Rest] ? Rest : never;
interface TShift<List extends unknown[] | void = void> extends Fn<{
    0: unknown[];
}> {
    slot: [List];
    data: Shift<this[0]>;
}

type Size<List extends any[]> = List["length"];
interface TSize<List extends unknown[] | void = void> extends Fn<{
    0: unknown[];
}> {
    slot: [List];
    data: Size<this[0]>;
}

type Slice<List extends unknown[], Start extends number = 0, End extends number = Size<List>> = Bound<Start, 0, Size<List>> extends infer Start ? Start extends number ? Bound<End, 0, Size<List>> extends infer End ? End extends number ? SliceTo<SliceFrom<List, Start>, Subtract<End, Start>> : never : never : never : never;
interface TSlice<Start extends number | void = void, End extends number | void = void, List extends unknown[] | void = void> extends Fn<{
    0: number;
    1: number;
    2: unknown[];
}> {
    slot: [Start, End, List];
    data: Slice<this[2], this[0], this[1]>;
}

type SliceFromHelper<List extends unknown[], Start extends number> = List extends [...ArrayOf<Start>, ...infer Rest] ? Rest : never;
type SliceFrom<List extends unknown[], Start extends number> = Gt<Start, Size<List>> extends 1 ? SliceFromHelper<List, Size<List>> : Lt<Start, 0> extends 1 ? SliceFromHelper<List, 0> : SliceFromHelper<List, Start>;
interface TSliceFrom<Start extends number | void = void, List extends unknown[] | void = void> extends Fn<{
    0: number;
    1: unknown[];
}> {
    slot: [Start, List];
    data: SliceFrom<this[1], this[0]>;
}

type SliceToHelper<List extends unknown[], End extends number> = List extends [
    ...infer Rest,
    ...ArrayOf<Subtract<Size<List>, End>>
] ? Rest : never;
type SliceTo<List extends unknown[], End extends number = Size<List>> = Gt<End, Size<List>> extends 1 ? SliceToHelper<List, Size<List>> : Lt<End, 0> extends 1 ? [] : SliceToHelper<List, End>;
interface TSliceTo<To extends number | void = void, List extends unknown[] | void = void> extends Fn<{
    0: number;
    1: unknown[];
}> {
    slot: [To, List];
    data: SliceTo<this[1], this[0]>;
}

type Some<Callback extends Fn, List extends Inspect<Callback>[]> = List extends [] ? 0 : List extends [
    infer Element extends Inspect<Callback>,
    ...infer Rest extends Inspect<Callback>[]
] ? Apply<Callback, [Element]> extends 1 ? 1 : Some<Callback, Rest> : 0;
interface TSome<Callback extends Fn, List extends Inspect<Callback> | void = void> extends Fn<{
    0: Fn;
    1: Inspect<Callback>;
}> {
    slot: [Callback, List];
    data: Some<this[0], this[1]>;
}

type Tail<T extends any[]> = T extends [any, ...infer Tail] ? Tail : never;
interface TTail<T extends unknown[] | void = void> extends Fn<{
    0: unknown[];
}> {
    slot: [T];
    data: Tail<this[0]>;
}

type Unshift<List extends any[], Element> = [Element, ...List];
interface TUnshift<Element extends unknown | void = void, List extends unknown[] | void = void> extends Fn<{
    0: unknown;
    1: unknown[];
}> {
    slot: [Element, List];
    data: Unshift<this[1], this[0]>;
}

type ValueAt<List extends any[], Index extends number> = IndexAt<List, Index> extends infer Index ? Index extends number ? List[Index] : never : never;
interface TValueAt<Index extends number | void = void, List extends unknown[] | void = void> extends Fn<{
    0: number;
    1: unknown[];
}> {
    slot: [Index, List];
    data: ValueAt<this[1], this[0]>;
}

type With<List extends any[], Index extends number, Element> = [
    ...SliceTo<List, Index>,
    Element,
    ...SliceFrom<List, Add<Index, 1>>
];
interface TWith<Index extends number | void = void, Element extends unknown | void = void, List extends unknown[] | void = void> extends Fn<{
    0: number;
    1: unknown;
    2: unknown[];
}> {
    slot: [Index, Element, List];
    data: With<this[2], this[0], this[1]>;
}

type Zip<Left extends any[], Right extends any[]> = Left extends [
    infer HeadA,
    ...infer RestA
] ? Right extends [infer HeadB, ...infer RestB] ? [[HeadA, HeadB], ...Zip<RestA, RestB>] : [] : [];
interface TZip<Left extends unknown[] | void = void, Right extends unknown[] | void = void> extends Fn<{
    0: unknown[];
    1: unknown[];
}> {
    slot: [Left, Right];
    data: Zip<this[0], this[1]>;
}

type Bound<Value extends number, LowerBound extends number, UpperBound extends number> = GtOrEq<Value, UpperBound> extends 1 ? UpperBound : LtOrEq<Value, LowerBound> extends 1 ? LowerBound : Value;
interface TBound<LowerBound extends number | void = void, UpperBound extends number | void = void, Value extends number | void = void> extends Fn<{
    0: number;
    1: number;
    2: number;
}> {
    slot: [LowerBound, UpperBound, Value];
    data: Bound<this[2], this[0], this[1]>;
}

type CeilHelper<Number extends number, DecimalPart extends number = Mod<Number, 1>, IntegerPart extends number = Subtract<Number, DecimalPart>> = DecimalPart extends 0 ? Number : `${Number}` extends `-${number}` ? IntegerPart : Add<IntegerPart, 1>;
type Ceil<Number extends number> = CeilHelper<Number>;
interface TCeil<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: Ceil<this[0]>;
}

type FloorHelper<Number extends number, DecimalPart extends number = Mod<Number, 1>, IntegerPart extends number = Subtract<Number, DecimalPart>> = DecimalPart extends 0 ? Number : `${Number}` extends `-${number}` ? Subtract<IntegerPart, 1> : IntegerPart;
type Floor<Number extends number> = FloorHelper<Number>;
interface TFloor<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: Floor<this[0]>;
}

type Suffixes = ["th", "st", "nd", "rd"];
type Coordinate<Digit extends number, WithinRange extends Bit = Lt<Digit, Size<Suffixes>>, NotNegative extends Bit = IsPositive<Digit>> = And<WithinRange, NotNegative> extends 1 ? ValueAt<Suffixes, Digit> : ValueAt<Suffixes, 0>;
type OrdinalHelper<NumberToOrdinal extends number, TensDigit extends number = Mod<Abs<NumberToOrdinal>, 100>, UnitsDigit extends number = Gt<TensDigit, 10> extends 1 ? Mod<Subtract<TensDigit, 20>, 10> : TensDigit> = Stringify<NumberToOrdinal> extends infer Value ? Value extends string ? Includes<Suffixes, Coordinate<UnitsDigit>> extends 1 ? Append<Value, Coordinate<UnitsDigit>> : Includes<Suffixes, Coordinate<TensDigit>> extends 1 ? Append<Value, Coordinate<TensDigit>> : Append<Value, ValueAt<Suffixes, 0>> : never : never;
type Ordinal<Number extends number> = OrdinalHelper<Number>;
interface TOrdinal<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: Ordinal<this[0]>;
}

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Float<Value extends number, Decimal extends number> = Pow<10, Decimal> extends infer Divisor extends number ? Divide<Value, Divisor> : never;
type Int<Input extends number> = `${Input}` extends `${infer R extends number}.${string}` ? R : Input;
type ParseIntHelper<Input extends string, Outlook extends "Signed" | "Unsigned", Accumulator extends string = "", Decimal extends number = 0, Sign extends "-" | "" = ""> = Input extends `${infer Significand extends number}e-${infer Exponential extends number}` ? Float<Significand, Exponential> : Input extends `${infer Head}${infer Input}` ? Head extends Digit ? ParseIntHelper<Input, Outlook, `${Accumulator}${Head}`, Decimal, Sign> : Every<TIsSubType<1>, [
    IsSubType<Outlook, "Signed">,
    IsSubType<Head, "-">,
    IsSubType<Accumulator, "">
]> extends 1 ? ParseIntHelper<Input, Outlook, Accumulator, Decimal, "-"> : Head extends "." ? ParseIntHelper<Input, Outlook, Accumulator, Length<Accumulator>, Sign> : ParseIntHelper<Input, Outlook, Accumulator, Decimal, Sign> : `${Sign}${TrimStart<Accumulator>}` extends `${infer Input extends number}` ? Decimal extends 0 ? Input : Float<Input, Subtract<Length<Accumulator>, Decimal>> : Input;
type ParseInt<Input extends string | number | boolean, Outlook extends "Signed" | "Unsigned" = "Unsigned", Output extends "Integer" | "Float" = "Float"> = Input extends number ? Output extends "Float" ? Input : Int<Input> : Input extends string ? ParseIntHelper<Input, Outlook> extends infer Number extends number ? Output extends "Float" ? Number : Int<Number> : 0 : Input extends true ? 1 : Input extends false ? 0 : never;
interface TParseInt<Outlook extends "Signed" | "Unsigned" | void = "Unsigned", Output extends "Integer" | "Float" | void = "Float", Input extends string | number | boolean | void = void> extends Fn<{
    0: "Signed" | "Unsigned";
    1: "Integer" | "Float";
    2: string | number | boolean;
}> {
    slot: [Outlook, Output, Input];
    data: ParseInt<this[2], this[0], this[1]>;
}

type EuclideanDivision<Dividend extends number, Divisor extends number> = Multiply<Sign<Divisor>, Floor<Divide<Dividend, Abs<Divisor>>>>;

type FlooredDivision<Dividend extends number, Divisor extends number> = Floor<Divide<Dividend, Divisor>>;

type TruncatingDivision<Dividend extends number, Divisor extends number> = Trunc<Divide<Dividend, Divisor>>;

type Quotient<Dividend extends number, Divisor extends number, Type extends "Euclidean" | "Truncating" | "Floored" = "Truncating"> = Type extends "Euclidean" ? EuclideanDivision<Dividend, Divisor> : Type extends "Truncating" ? TruncatingDivision<Dividend, Divisor> : Type extends "Floored" ? FlooredDivision<Dividend, Divisor> : never;
interface TQuotient<Divisor extends number | void = void, Type extends "Euclidean" | "Truncating" | "Floored" | void = "Truncating", Dividend extends number | void = void> extends Fn<{
    0: number;
    1: "Euclidean" | "Truncating" | "Floored";
    2: number;
}> {
    slot: [Divisor, Type, Dividend];
    data: Quotient<this[2], this[0], this[1]>;
}

type Round<Value extends number, MidPointRounding extends "AwayFromZero" | "ToEven" = "ToEven"> = MidPointRounding extends "AwayFromZero" ? Multiply<Sign<Value>, Floor<Add<Abs<Value>, 0.5>>> : Floor<Subtract<Add<Value, 0.5>, Mod<Floor<Add<Value, 0.5>>, 1>>>;
interface TRound<MidPointRounding extends "AwayFromZero" | "ToEven" | void = "ToEven", Value extends number | void = void> extends Fn<{
    0: "AwayFromZero" | "ToEven";
    1: number;
}> {
    slot: [MidPointRounding, Value];
    data: Round<this[1], this[0]>;
}

type Sign<Number extends number> = `${Number}` extends `-${number}` ? -1 : 1;
interface TSign<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: Sign<this[0]>;
}

type Trunc<Number extends number> = Subtract<Number, Mod<Number, 1>>;
interface TTrunc<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: Trunc<this[0]>;
}

interface TAbs<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: Abs<this[0]>;
}

interface TAdd<Left extends number | void = void, Right extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Left, Right];
    data: Add<this[0], this[1]>;
}

interface TAnd<Left extends Bit | void = void, Right extends Bit | void = void> extends Fn<{
    0: Bit;
    1: Bit;
}> {
    slot: [Left, Right];
    data: And<this[0], this[1]>;
}

interface TCompare<Left extends number | void = void, Right extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Left, Right];
    data: Compare<this[0], this[1]>;
}

interface TDivide<Divisor extends number | void = void, Dividend extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Divisor, Dividend];
    data: Divide<this[1], this[0]>;
}

interface TEq<Left extends number | void = void, Right extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Left, Right];
    data: Eq<this[0], this[1]>;
}

interface TGt<Right extends number | void = void, Left extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Right, Left];
    data: Gt<this[1], this[0]>;
}

interface TGtOrEq<Right extends number | void = void, Left extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Right, Left];
    data: GtOrEq<this[1], this[0]>;
}

interface TIsEven<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: IsEven<this[0]>;
}

type IsInteger<Number extends unknown> = Number extends number ? IsInt<Number> : 0;
interface TIsInteger<Number extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Number];
    data: IsInteger<this[0]>;
}

interface TIsNegative<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: IsNegative<this[0]>;
}

type IsNotInteger<Number extends unknown> = Number extends number ? IsNotInt<Number> : 0;
interface TIsNotInteger<Number extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Number];
    data: IsNotInteger<this[0]>;
}

interface TIsOdd<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: IsOdd<this[0]>;
}

interface TIsPositive<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: IsPositive<this[0]>;
}

interface TLt<Right extends number | void = void, Left extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Right, Left];
    data: Lt<this[1], this[0]>;
}

interface TLtOrEq<Right extends number | void = void, Left extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Right, Left];
    data: LtOrEq<this[1], this[0]>;
}

interface TMax<Right extends number | void = void, Left extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Right, Left];
    data: Max<this[1], this[0]>;
}

interface TMin<Right extends number | void = void, Left extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Right, Left];
    data: Min<this[1], this[0]>;
}

interface TMod<Divisor extends number | void = void, Dividend extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Divisor, Dividend];
    data: Mod<this[1], this[0]>;
}

interface TMultiply<Right extends number | void = void, Left extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Right, Left];
    data: Multiply<this[1], this[0]>;
}

interface TNegate<Number extends number | void = void> extends Fn<{
    0: number;
}> {
    slot: [Number];
    data: Negate<this[0]>;
}

interface TNot<Number extends Bit | void = void> extends Fn<{
    0: Bit;
}> {
    slot: [Number];
    data: Not<this[0]>;
}

interface TOr<Right extends Bit | void = void, Left extends Bit | void = void> extends Fn<{
    0: Bit;
    1: Bit;
}> {
    slot: [Right, Left];
    data: Or<this[1], this[0]>;
}

interface TPow<Right extends number | void = void, Left extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Right, Left];
    data: Pow<this[1], this[0]>;
}

interface TSubtract<Right extends number | void = void, Left extends number | void = void> extends Fn<{
    0: number;
    1: number;
}> {
    slot: [Right, Left];
    data: Subtract<this[1], this[0]>;
}

interface TXor<Right extends Bit | void = void, Left extends Bit | void = void> extends Fn<{
    0: Bit;
    1: Bit;
}> {
    slot: [Right, Left];
    data: Xor<this[1], this[0]>;
}

type Addition<Numbers extends number[]> = Numbers extends [
    infer First extends number,
    ...infer Rest extends number[]
] ? Add<First, Addition<Rest>> : 0;
interface TAddition<Numbers extends number[] | void = void> extends Fn<{
    0: number[];
}> {
    slot: [Numbers];
    data: Addition<this[0]>;
}

type Division<Numbers extends number[]> = Numbers extends [
    ...infer Rest extends number[],
    infer Last extends number
] ? Rest extends [] ? Last : Divide<Division<Rest>, Last> : 1;
interface TDivision<Numbers extends number[] | void = void> extends Fn<{
    0: number[];
}> {
    slot: [Numbers];
    data: Division<this[0]>;
}

type Maximum<Numbers extends number[]> = Numbers extends [
    infer First extends number,
    ...infer Rest extends number[]
] ? Max<First, Maximum<Rest>> : 0;
interface TMaximum<Numbers extends number[] | void = void> extends Fn<{
    0: number[];
}> {
    slot: [Numbers];
    data: Maximum<this[0]>;
}

type Minimum<Numbers extends number[]> = Numbers extends [
    ...infer Rest extends number[],
    infer Last extends number
] ? Rest extends [] ? Last : Min<Minimum<Rest>, Last> : 0;
interface TMinimum<Numbers extends number[] | void = void> extends Fn<{
    0: number[];
}> {
    slot: [Numbers];
    data: Minimum<this[0]>;
}

/**
 * @description
 * - It is no different from the Euclidean Modulo operator, except that it uses a different approach.
 */
type EuclideanKnuthianMod<Dividend extends number, Divisor extends number> = Subtract<Dividend, Multiply<Floor<Divide<Dividend, Divisor>>, Divisor>>;

type EuclideanMod<Dividend extends number, Divisor extends number> = Abs<Divisor> extends infer R extends number ? Mod<Add<Mod<Dividend, R>, R>, R> : never;

type FlooredMod<Dividend extends number, Divisor extends number> = Mod<Add<Mod<Dividend, Divisor>, Divisor>, Divisor>;

type TruncatingMod<Dividend extends number, Divisor extends number> = Mod<Dividend, Divisor>;

/**
 * Returns the remainder of the division of `Dividend` by `Divisor`.
 *
 * @description
 * - If both dividend and divisor are positive, then all three definitions agree.
 * - If the dividend is positive and the divisor is negative, then the truncating and Euclidean definitions agree.
 * - If the dividend is negative and the divisor is positive, then the flooring and Euclidean definitions agree.
 * - If both dividend and divisor are negative, then the truncating and flooring definitions agree.
 */
type Modulo<Dividend extends number, Divisor extends number, Type extends "Euclidean" | "Euclidean-Knuthian" | "Truncating" | "Floored" = "Euclidean-Knuthian"> = Type extends "Euclidean" ? EuclideanMod<Dividend, Divisor> : Type extends "Euclidean-Knuthian" ? EuclideanKnuthianMod<Dividend, Divisor> : Type extends "Truncating" ? TruncatingMod<Dividend, Divisor> : Type extends "Floored" ? FlooredMod<Dividend, Divisor> : never;
interface TModulo<Divisor extends number | void = void, Type extends "Euclidean" | "Euclidean-Knuthian" | "Truncating" | "Floored" | void = "Euclidean-Knuthian", Dividend extends number | void = void> extends Fn<{
    0: number;
    1: "Euclidean" | "Euclidean-Knuthian" | "Truncating" | "Floored";
    2: number;
}> {
    slot: [Divisor, Type, Dividend];
    data: Modulo<this[2], this[0], this[1]>;
}

type Multiplication<Numbers extends number[]> = Numbers extends [
    infer First extends number,
    ...infer Rest extends number[]
] ? Multiply<First, Multiplication<Rest>> : 1;
interface TMultiplication<Numbers extends number[] | void = void> extends Fn<{
    0: number[];
}> {
    slot: [Numbers];
    data: Multiplication<this[0]>;
}

type Subtraction<Numbers extends number[]> = Numbers extends [
    ...infer Rest extends number[],
    infer Last extends number
] ? Rest extends [] ? Last : Subtract<Subtraction<Rest>, Last> : 1;
interface TSubtraction<Numbers extends number[] | void = void> extends Fn<{
    0: number[];
}> {
    slot: [Numbers];
    data: Subtraction<this[0]>;
}

type FirstOfUnionHelper<Union extends unknown, Result = keyof Union> = UnionToIntersection<Union extends any ? () => Union : never> extends () => infer Head ? FirstOfUnionHelper<Exclude<Union, Head>, Head> : Result;
type FirstOfUnion<Union extends unknown> = FirstOfUnionHelper<Union>;
interface TFirstOfUnion<Union extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Union];
    data: FirstOfUnion<this[0]>;
}

type Intersect$1<ObjectType extends Dictionary> = {
    [Key in keyof ObjectType]: ObjectType[Key] extends Dictionary ? Intersect$1<ObjectType[Key]> : ObjectType[Key];
} & {};
interface TIntersect<ObjectType extends Dictionary | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [ObjectType];
    data: Intersect$1<this[0]>;
}

type LastOfUnion<Union extends unknown> = UnionToIntersection<Union extends any ? () => Union : never> extends () => infer Tail ? Tail : never;
interface TLastOfUnion<Union extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Union];
    data: LastOfUnion<this[0]>;
}

type UnionToIntersection<Union extends unknown> = (Union extends any ? (k: Union) => void : never) extends (k: infer Intersection extends Dictionary) => void ? Intersection : never;
interface TUnionToIntersection<Union extends unknown | void = void> extends Fn<{
    0: Dictionary;
}> {
    slot: [Union];
    data: UnionToIntersection<this[0]>;
}

type UnionToTupleHelper<Union extends unknown, Tail = LastOfUnion<Union>, Rest = Exclude<Union, Tail>> = [Tail] extends [never] ? [] : [...UnionToTupleHelper<Rest>, Tail];
type UnionToTuple<Union extends unknown> = UnionToTupleHelper<Union>;
interface TUnionToTuple<Union extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Union];
    data: UnionToTuple<this[0]>;
}

type Unionize<Intersection> = Intersect$1<UnionToIntersection<Intersection>>;
interface TUnionize<Intersection extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Intersection];
    data: Unionize<this[0]>;
}

type DefaultWidenOptions = {
    flattenArrays: true;
    widenReturnType: true;
};
type Flatten<Value extends any[]> = Value extends (infer X)[] ? Widen<X>[] : Value;
type Widen<Value, Options extends {
    flattenArrays?: boolean;
    widenReturnType?: boolean;
} = DefaultWidenOptions> = Value extends string ? string : Value extends number ? number : Value extends bigint ? bigint : Value extends boolean ? boolean : Value extends any[] ? [Options["flattenArrays"]] extends [true] ? Flatten<Value> : Value extends [infer Head, ...infer Rest] ? [Widen<Head>, ...Widen<Rest>] : Value : Value extends Dictionary ? {
    [K in keyof Value]: Widen<Value[K]>;
} : Value extends (...args: any[]) => any ? [Options["widenReturnType"]] extends [true] ? (...args: Parameters<Value>) => Widen<ReturnType<Value>> : Value : Value;
interface TWiden<Options extends {
    flattenArrays?: boolean;
    widenReturnType?: boolean;
} | void = DefaultWidenOptions, Value extends unknown | void = void> extends Fn<{
    0: {
        flattenArrays?: boolean;
        widenReturnType?: boolean;
    };
    1: unknown;
}> {
    slot: [Options, Value];
    data: Widen<this[1], this[0]>;
}

type FallbackTo<ActualValue, FallbackValue, PreventableValue = undefined> = ActualValue extends PreventableValue ? FallbackValue : RequireValue<ActualValue>;
interface TFallbackTo<FallbackValue extends unknown | void = void, PreventableValue extends unknown | undefined = undefined, ActualValue extends unknown | void = void> extends Fn<{
    0: unknown;
    1: unknown | undefined;
    2: unknown;
}> {
    slot: [FallbackValue, PreventableValue, ActualValue];
    data: FallbackTo<this[2], this[0], this[1]>;
}

type If<Condition extends Bit | boolean, Then, Else = never> = Condition extends 1 | true ? Then : Else;
interface TIf<Then extends unknown | void = void, Else extends unknown | void = void, Condition extends Bit | boolean | void = void> extends Fn<{
    0: unknown;
    1: unknown;
    2: Bit | boolean;
}> {
    slot: [Then, Else, Condition];
    data: If<this[2], this[0], this[1]>;
}

type IfNot<Condition extends Bit | boolean, Then, Else = never> = Condition extends 0 | false ? Then : Else;
interface TIfNot<Then extends unknown | void = void, Else extends unknown | void = void, Condition extends Bit | boolean | void = void> extends Fn<{
    0: unknown;
    1: unknown;
    2: Bit | boolean;
}> {
    slot: [Then, Else, Condition];
    data: IfNot<this[2], this[0], this[1]>;
}

type IsBetween<Input extends number, LowerBound extends number, UpperBound extends number> = And<GtOrEq<Input, LowerBound>, LtOrEq<Input, UpperBound>>;
interface TIsBetween<LowerBound extends number | void = void, UpperBound extends number | void = void, Input extends number | void = void> extends Fn<{
    0: number;
    1: number;
    2: number;
}> {
    slot: [LowerBound, UpperBound, Input];
    data: IsBetween<this[2], this[0], this[1]>;
}

type IsExactTypeHelper<Left, Right> = [Right] extends [Left] ? 1 : 0;
type IsExactType<Left, Right> = And<IsExactTypeHelper<Left, Right>, IsExactTypeHelper<Right, Left>>;
interface TIsExactType<Left extends unknown | void = void, Right extends unknown | void = void> extends Fn<{
    0: unknown;
    1: unknown;
}> {
    slot: [Left, Right];
    data: IsExactType<this[0], this[1]>;
}

/**
 * Pretty prints a type.
 * @template T The type to pretty print.
 */
type Intersect<T> = {
    [K in keyof T]: T[K];
} & {};

type IsIntersectionHelper<Left, Right> = (<T>() => T extends Left & T ? 1 : 0) extends <T>() => T extends Right & T ? 1 : 0 ? 0 : 1;
type IsIntersection<Value> = IsIntersectionHelper<Value, Intersect<Value>>;
interface TIsIntersection<Value extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Value];
    data: IsIntersection<this[0]>;
}

type IsNever<Value> = [Value] extends [never] ? 1 : 0;
interface TIsNever<Value extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Value];
    data: IsNever<this[0]>;
}

type IsPartial<Value> = undefined extends Value ? [Value] extends [undefined] ? 0 : 1 : 0;
interface TIsPartial<Value extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Value];
    data: IsPartial<this[0]>;
}

type IsReadonly<Value> = Readonly<Value> extends Value ? true : false;
interface TIsReadonly<Value extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Value];
    data: IsReadonly<this[0]>;
}

type IsSubType<Left, Right> = Left extends Right ? 1 : 0;
interface TIsSubType<Right extends unknown | void = void, Left extends unknown | void = void> extends Fn<{
    0: unknown;
    1: unknown;
}> {
    slot: [Right, Left];
    data: IsSubType<this[1], this[0]>;
}

type IsSuperType<Left, Right> = Right extends Left ? 1 : 0;
interface TIsSuperType<Right extends unknown | void = void, Left extends unknown | void = void> extends Fn<{
    0: unknown;
    1: unknown;
}> {
    slot: [Right, Left];
    data: IsSuperType<this[1], this[0]>;
}

type IsUnion<Value> = [Value] extends UnionToTuple<Value> ? 0 : 1;
interface TIsUnion<Value extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [Value];
    data: IsUnion<this[0]>;
}

type IsVoid<T> = [void] extends [T] ? 1 : 0;
interface TIsVoid<T extends unknown | void = void> extends Fn<{
    0: unknown;
}> {
    slot: [T];
    data: IsVoid<this[0]>;
}

interface FnImpl {
    /**
     * Field for arguments within higher-order functions
     *
     * @description
     * This field is used to represent arguments in a higher-order function.
     */
    args: unknown;
    /**
     * A field that represents a slot.
     *
     * @description
     * This field is used to represent arguments in a function.
     */
    slot: unknown;
    /**
     * Field for the return value of functions
     *
     * @description
     * This field is used to represent the return value of a function.
     */
    data: unknown;
}
interface FnArgs extends FnImpl {
    0: Retrieve<this["args"], 0>;
    1: Retrieve<this["args"], 1>;
    2: Retrieve<this["args"], 2>;
    3: Retrieve<this["args"], 3>;
    4: Retrieve<this["args"], 4>;
    5: Retrieve<this["args"], 5>;
    6: Retrieve<this["args"], 6>;
    7: Retrieve<this["args"], 7>;
    8: Retrieve<this["args"], 8>;
    9: Retrieve<this["args"], 9>;
}
/**
 * Parameterized function type
 * @see https://github.com/microsoft/TypeScript/issues/1213#issuecomment-1215039765
 * @see https://stackoverflow.com/a/73533674
 */
interface Fn<Params extends Dictionary<number> = {}> extends FnArgs {
    /**
     * Field for parameters within higher-order functions
     *
     * @description
     * This field is used to represent parameters in a higher-order function.
     */
    params: [
        Params[0],
        Params[1],
        Params[2],
        Params[3],
        Params[4],
        Params[5],
        Params[6],
        Params[7],
        Params[8],
        Params[9]
    ];
}

type Apply<Callback extends Fn, List extends NonEmptyArray<Inspect<Callback>>> = (Callback & {
    args: List extends Inspect<Callback>[] ? Select<Callback["slot"], List> : never;
})["data"];
interface TApply<Callback extends Fn, List extends NonEmptyArray<Inspect<Callback>> | void = void> extends Fn<{
    0: Fn;
    1: NonEmptyArray<Inspect<Callback>>;
}> {
    slot: [Callback, List];
    data: Apply<this[0], this[1]>;
}

type Call<Callback extends Fn> = (Callback & {
    args: Callback["slot"];
})["data"];
interface TCall<Callback extends Fn> extends Fn<{
    0: Fn;
}> {
    slot: [Callback];
    data: Call<this[0]>;
}

type Pipe<Item extends unknown, List extends Fn[]> = List extends [
    infer Callback extends Fn,
    ...infer Rest extends Fn[]
] ? Item extends Inspect<Callback> ? Pipe<Apply<Callback, [Item]>, Rest> : never : Item;
interface TPipe<List extends Fn[] | void = void, Item extends unknown | void = void> extends Fn<{
    0: Fn[];
    1: unknown;
}> {
    slot: [List, Item];
    data: Pipe<this[1], this[0]>;
}

type SingleOut<List extends unknown[]> = List extends [infer Value] ? Value : List;
type MarkOut<List extends unknown[], Types> = List extends [
    ...infer Ls,
    infer Lv
] ? Types extends [...infer Ts, infer Tv] ? [void] extends [Lv] ? [...MarkOut<Ls, Ts>, Tv] : MarkOut<Ls, Ts> : [] : [];
type Inspect<Callback extends Fn> = Callback["slot"] extends unknown[] ? SingleOut<MarkOut<Callback["slot"], SliceTo<Callback["params"], Size<Callback["slot"]>>>> : never;

/**
 * @example
 *
 * type Test = Select<[void, 2, void], [6, 7]>;
 * //   ^? Result: [6, 2, 7]
 *
 * type Test = Select<[6, void, void], [7, 8]>;
 * //   ^? Result: [6, 7, 8]
 */
type Select<Left extends unknown = [], Right extends unknown = [], Result extends unknown[] = []> = Left extends unknown[] ? Right extends unknown[] ? Left extends [] ? Result : Right extends [] ? [...Left, ...Result] : Left extends [...infer Ls, infer Lv] ? Right extends [...infer Rs, infer Rv] ? [void] extends [Lv] ? [void] extends [Rv] ? Rs extends [...infer Rs, infer Rv] ? Select<Ls, Rs, [Rv, ...Result]> : Select<Ls, Rs, Result> : Select<Ls, Rs, [Rv, ...Result]> : Select<Ls, Right, [Lv, ...Result]> : Result : Result : never : never;

/**
 * Placeholder for unset values
 *
 * @description
 * This symbol is used to represent void values.
 */
declare const unset: unique symbol;
type unset = typeof unset;

type ArbitraryKey<T = never> = T | (string & {});

type Buffers = SharedArrayBuffer | SharedArrayBufferConstructor | Atomics;

type Derivatives = RegExp | Date | JSON;

type PropertyKey = string | number | symbol;
type Dictionary<Key extends PropertyKey = string, Type extends unknown = unknown> = Record<Key, Type>;

type Digits = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type Errors = Error | ErrorConstructor | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError;

type Events = Event | ErrorEvent | DOMException | CustomEvent | EventTarget | EventListener | EventListenerObject | EventListenerOrEventListenerObject | EventListenerOptions;

type Functions = Function | FunctionConstructor | Generator | GeneratorFunction | GeneratorFunctionConstructor | AsyncGenerator | AsyncGeneratorFunction | AsyncGeneratorFunctionConstructor | Promise<any> | PromiseConstructor;

type Arrays = Array<any> | ReadonlyArray<any>;

type TypedArrays = ArrayBuffer | DataView | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;

type Indexable = Arrays | TypedArrays;

type Maps = Map<any, any> | WeakMap<object, any> | ReadonlyMap<any, any>;

type Sets = Set<any> | WeakSet<object> | ReadonlySet<any>;

type Structures = Maps | Sets;

type Iterables = string | Iterable<any> | AsyncIterable<any> | IterableIterator<any> | AsyncIterableIterator<any> | Sets | Maps;

type Serializable = string | number | bigint | boolean | null | undefined;

type Primitives = Serializable | symbol;

type Symbols = "~" | "!" | "@" | "#" | "$" | "%" | "^" | "&" | "*" | "(" | ")" | "-" | "_" | "=" | "+" | "[" | "{" | "]" | "}" | "\\" | "/" | "|" | ";" | ":" | "'" | '"' | "," | "<" | "." | ">" | "?" | "`";

export { type Addition, type Append, type Apply, type ArbitraryKey, type ArrayOf, type Arrays, type Bound, type Buffers, type Call, type Ceil, type Collect, type Combine, type Concat, type Contains, type DeepPartial, type DeepRequired, type Derivatives, type Dictionary, type Digits, type Division, type Elements, type EndsWith, type Errors, type Events, type Every, type ExcludeKeys, type ExtractNestedKeys, type ExtractRootKey, type FallbackTo, type Filter, type FirstOfUnion, type Flat, type Floor, type Fn, type FromEntries, type Functions, type Get, type Has, type Head$1 as Head, type If, type IfNot, type IncludeKeys, type Includes, type IndexAt, type Indexable, type Indices, type Inspect, type Intersect$1 as Intersect, type IsBetween, type IsExactType, type IsInteger, type IsIntersection, type IsNever, type IsNotInteger, type IsPartial, type IsReadonly, type IsSubType, type IsSuperType, type IsUnion, type IsVoid, type Iterables, type Join, type JoinKeys, type Keys, type LastOfUnion, type Length, type Map$1 as Map, type Maps, type Maximum, type Merge, type Minimum, type Modulo, type Multiplication, type Mutable, type NonEmptyArray, type ObjectFromPath, type OmitOptionalValues, type OmitPath, type OmitRequiredValues, type OptionalKeys, type OptionalKeysDeep, type Ordinal, type PadEnd, type PadStart, type ParseInt, type Paths, type Pattern, type Pipe, type Place, type Pop, type Prepend, type Primitives, type Push, type Quotient, type Range, type Replace, type RequireValue, type RequiredKeys, type RequiredKeysDeep, type Retrieve, type Reverse, type Round, type Select, type Serializable, type SetValue, type Sets, type Shift, type Sign, type Size, type Slice, type SliceFrom, type SliceTo, type Some, type Split, type StartsWith, type Stringify, type Structures, type Substring, type Subtraction, type Symbols, type TAbs, type TAdd, type TAddition, type TAnd, type TAppend, type TApply, type TArrayOf, type TBound, type TCall, type TCeil, type TCollect, type TCombine, type TCompare, type TConcat, type TContains, type TDeepPartial, type TDeepRequired, type TDivide, type TDivision, type TElements, type TEndsWith, type TEq, type TEvery, type TExcludeKeys, type TExtractNestedKeys, type TExtractRootKey, type TFallbackTo, type TFilter, type TFirstOfUnion, type TFlat, type TFloor, type TFromEntries, type TGet, type TGt, type TGtOrEq, type THas, type THead, type TIf, type TIfNot, type TIncludeKeys, type TIncludes, type TIndexAt, type TIndices, type TIntersect, type TIsBetween, type TIsEven, type TIsExactType, type TIsInteger, type TIsIntersection, type TIsNegative, type TIsNever, type TIsNotInteger, type TIsOdd, type TIsPartial, type TIsPositive, type TIsReadonly, type TIsSubType, type TIsSuperType, type TIsUnion, type TIsVoid, type TJoin, type TJoinKeys, type TKeys, type TKeysAsTuple, type TLastOfUnion, type TLength, type TLt, type TLtOrEq, type TMap, type TMax, type TMaximum, type TMerge, type TMin, type TMinimum, type TMod, type TModulo, type TMultiplication, type TMultiply, type TMutable, type TNegate, type TNot, type TObjectFromPath, type TOmitOptionalValues, type TOmitPath, type TOmitRequiredValues, type TOptionalKeys, type TOptionalKeysDeep, type TOr, type TOrdinal, type TPadEnd, type TPadStart, type TParseInt, type TPaths, type TPattern, type TPipe, type TPlace, type TPop, type TPow, type TPrepend, type TPush, type TQuotient, type TRange, type TReplace, type TRequireValue, type TRequiredKeys, type TRequiredKeysDeep, type TRetrieve, type TReverse, type TRound, type TSetValue, type TShift, type TSign, type TSize, type TSlice, type TSliceFrom, type TSliceTo, type TSome, type TSplit, type TStartsWith, type TStringify, type TSubstring, type TSubtract, type TSubtraction, type TTail, type TToEntries, type TTrim, type TTrimEnd, type TTrimStart, type TTrunc, type TUnionToIntersection, type TUnionToTuple, type TUnionize, type TUnshift, type TValueAt, type TValues, type TWiden, type TWith, type TXor, type TZip, type Tail, type ToEntries, type Trim, type TrimEnd, type TrimStart, type Trunc, type TypedArrays, type UnionToIntersection, type UnionToTuple, type Unionize, type Unshift, type ValueAt, type Values, type Widen, type With, type Zip, unset };
