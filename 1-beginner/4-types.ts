// Primitive Types
const string: string = "Some String";
const number: number = 3452334.2524;
const boolean: boolean = false;

// Function Types
function foo(a: string, b: number): boolean {
  return Boolean(a + b.toString());
}

const altFoo = (a: string, b: number): boolean => Boolean(a + b.toString());

// Object Types
type SomeObject = {
  a: {
    b: string;
    c: number;
  };
  d: {
    e: {
      f: {
        g: boolean;
      };
    };
  };
  h: string;
};

const object: SomeObject = {
  a: {
    b: "asdasd",
    c: 34234,
  },
  d: {
    e: {
      f: {
        g: true,
      },
    },
  },
  h: "asdkljhasd",
};

const array: Array<number> = [1, 2, 3, 7];

// Structural Subtyping
type Person = {
  name: string;
  age: number;
};

type Employee = {
  name: string;
  age: number;
  isBoss: boolean;
};

const employee: Employee = {
  name: "John",
  age: 42,
  isBoss: true,
};

const person: Person = employee;

// Nullable Types
const undefinedValue: undefined = undefined;
const nullValue: null = null;

function returnsNothing(): void {
  // Actually returns undefined
  return;
}

// Special Types
const any: any = 89324;
const whatever: string = any;

const unknown: unknown = "asdasd";
const something: string = unknown;

// Principle of Explosion (ex falso sequitur quodlibet/from contradiction, anything follows)
const never: never = "asdasd";
const a: number = never;

// Union Types
let stringOrNumber: string | number = 324234;
stringOrNumber = "dasdasd";

// Intersection Types
type ConvertibleToString = {
  toString: () => string;
};

type Pet = {
  name: string;
};

const fred: Pet & ConvertibleToString = {
  name: "asdasd",
  toString: () => fred.name,
};

// Type Constructors (AKA Generics)
type Cloneable<T> = {
  clone: () => T;
};

const cloneArray = <T extends Cloneable<T>>(array: Array<T>): Array<T> => {
  return array.map((element) => element.clone());
};

export {};
