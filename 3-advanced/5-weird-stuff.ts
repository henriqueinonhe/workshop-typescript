type Natural = string;

// Constants

type Zero = "";
type One = "i";
type Two = "ii";
type Three = "iii";
type Four = "iiii";
type Five = "iiiii";
type Six = "iiiiii";
type Seven = "iiiiiii";
type Eight = "iiiiiiii";
type Nine = "iiiiiiiii";

// Arithmetic Operators

type Succ<N extends Natural> = `${N}i`;

type Add<N extends Natural, M extends Natural> = M extends Zero
  ? N
  : M extends Succ<infer R>
  ? Succ<Add<N, R>>
  : never;

type Pred<N extends Natural> = N extends `${infer M}i` ? M : Zero;

type Sub<N extends Natural, M extends Natural> = M extends Succ<infer R>
  ? Pred<Sub<N, R>>
  : N;

type Mult<N extends Natural, M extends Natural> = M extends Zero
  ? Zero
  : M extends One
  ? N
  : M extends Succ<infer R>
  ? Add<N, Mult<N, R>>
  : never;

type LessThanEq<N extends Natural, M extends Natural> = Sub<N, M> extends Zero
  ? true
  : false;

type LessThan<N extends Natural, M extends Natural> = Sub<N, M> extends Zero
  ? N extends M
    ? false
    : true
  : false;

type DivAux<N extends Natural, M extends Natural, Accum extends Natural> = Mult<
  M,
  Accum
> extends N
  ? Accum
  : LessThan<Mult<M, Accum>, N> extends true
  ? DivAux<N, M, Succ<Accum>>
  : Pred<Accum>;

type Div<N extends Natural, M extends Natural> = LessThan<N, M> extends true
  ? Zero
  : DivAux<N, M, One>;

type Fib<N extends Natural> = N extends Zero
  ? One
  : N extends One
  ? One
  : Add<Fib<Pred<N>>, Fib<Pred<Pred<N>>>>;

type Factorial<N extends Natural> = N extends Zero
  ? One
  : Mult<N, Factorial<Pred<N>>>;

// Lists

// type Nil = '!';

type Concat<A extends string, B extends string> = `${A}, ${B}`;

type Head<List extends string> = List extends `${infer Head}, ${infer Tail}`
  ? Head
  : List;

type Tail<List extends string> = List extends `${infer Head}, ${infer Tail}`
  ? Tail
  : List;

type At<List extends string, Index extends Natural> = Index extends Zero
  ? Head<List>
  : At<Tail<List>, Pred<Index>>;

export type Test = At<Concat<Concat<Concat<One, Two>, Three>, Four>, Two>;
