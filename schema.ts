// Query builder
const queryResult = executeJomql({
  // Start typing here to get hints
});

export function executeJomql<Key extends keyof Root>(
  query: GetQuery<Key>
): GetResponse<Key> {
  let data: any;
  return data;
}

// scaffolding
export type GetQuery<K extends keyof Root> = K extends never
  ? Partial<Record<K, Queryize<Root[keyof Root]>>>
  : Record<K, Queryize<Root[K]>>;

export type GetResponse<K extends keyof Root> = Responseize<Root[K]>;

type Primitive = string | number | boolean | undefined | null;

type Field<T, K> = {
  Type: T;
  Args: K;
};

type Responseize<T> = T extends Field<infer Type, infer Args>
  ? Type extends never
    ? never
    : Type extends (infer U)[]
    ? { [P in keyof U]: Responseize<U[P]> }[]
    : { [P in keyof Type]: Responseize<Type[P]> }
  : never;

type Queryize<T> = T extends Field<infer Type, infer Args>
  ? Type extends never
    ? never
    : Type extends Primitive
    ? Args extends undefined // Args is undefined
      ? true
      : Args extends [infer Arg]
      ? true | { __args: Arg } // Args is a tuple
      : { __args: Args }
    : Type extends (infer U)[]
    ? Queryize<Field<U, Args>>
    : Args extends undefined // Args is undefined
    ? { [P in keyof Type]?: Queryize<Type[P]> }
    : Args extends [infer Arg]
    ? { [P in keyof Type]?: Queryize<Type[P]> } & {
        __args?: Arg;
      }
    : { [P in keyof Type]?: Queryize<Type[P]> } & { __args: Args }
  : never;

/**All Scalar values*/ export type Scalars = {
  /**String value*/ string: string;
  /**True or False*/ boolean: boolean;
  /**Numerical value*/ number: number;
  /**Unknown value*/ unknown: unknown;
  /**ID Field*/ id: number;
  /**Enum stored as a separate key value*/ episode:
    | "NEW_HOPE"
    | "EMPIRE"
    | "JEDI";
};
/**All Input types*/ export type InputType = {
  getDroid: { id: Scalars["string"] };
  getHuman: { id: Scalars["string"] };
  getHeroByEpisode: { episode: Scalars["episode"] };
};
/**A droid*/ export type Droid = {
  /**The ID of the droid*/ id: { Type: Scalars["string"]; Args: undefined };
  name: { Type: Scalars["string"]; Args: undefined };
  foo: { Type: Scalars["string"]; Args: undefined };
  friends: { Type: Droid[]; Args: undefined };
  appearsIn: { Type: Scalars["episode"][]; Args: undefined };
  secretBackstory: { Type: never; Args: undefined };
  primaryFunction: { Type: Scalars["string"]; Args: undefined };
};
/**A human*/ export type Human = {
  /**The ID of the human*/ id: { Type: Scalars["string"]; Args: undefined };
  name: { Type: Scalars["string"]; Args: undefined };
  friends: { Type: Droid[]; Args: undefined };
  appearsIn: { Type: Scalars["episode"][]; Args: undefined };
  homePlanet: { Type: Scalars["string"] | null; Args: undefined };
  secretBackstory: { Type: never; Args: undefined };
};
/**All Root resolvers*/ export type Root = {
  getDroid: { Type: Droid; Args: InputType["getDroid"] };
  getHuman: { Type: Human; Args: InputType["getHuman"] };
  getHeroByEpisode: { Type: Droid; Args: InputType["getHeroByEpisode"] };
  getEpisodes: { Type: Scalars["episode"][]; Args: undefined };
  getSum: { Type: Scalars["number"]; Args: Scalars["number"][] };
  getBar: { Type: Scalars["string"][]; Args: undefined };
};
