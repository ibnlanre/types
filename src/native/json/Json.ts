type Primitive = string | number | boolean | null;
type Member = Primitive | Record<string, Primitive> | Array<Json>;

export type Json = Member | Record<string, Member>;
