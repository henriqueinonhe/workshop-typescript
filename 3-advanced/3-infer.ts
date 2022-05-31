const foo = <T>(value: T): T extends Array<infer U> ? U : T => {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value as T extends Array<infer U> ? U : T;
};

const a = foo([2]);
const b = foo(2 as number);

export {};
