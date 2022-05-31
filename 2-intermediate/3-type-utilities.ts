// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Indexed Access Types
type User = {
  id: string;
  name: string;
  age: string;
  address: {
    country: string;
    state: string;
    city: string;
    street: string;
    zipCode: string;
  };
};

const doSomethingWithUserAddress = (address: User["address"]): unknown => {
  //...
  return;
};

const libFunctionWithComplexReturnType = (): {
  a: {
    b: {
      c: {
        d: string;
      };
    };
  };
} => {
  return null as any;
};

type A = ReturnType<typeof libFunctionWithComplexReturnType>["a"]["b"];

// ValuesType
type ValuesType<T> = T[keyof T];

// https://www.npmjs.com/package/utility-types

export {};
