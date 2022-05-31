type WithSerializedProperties<T extends Record<string, unknown>> = {
  [Key in keyof T]: string;
};

const serializeProperties = <T extends Record<string, unknown>>(
  object: T
): WithSerializedProperties<T> => {
  const returnValue = {} as WithSerializedProperties<T>;

  Object.entries(object).forEach(([key, value]) => {
    returnValue[key as keyof T] = JSON.stringify(value);
  });

  return returnValue;
};

const obj = {
  name: "John",
  age: 23,
  address: {
    city: "asdasd",
  },
  hasCar: false,
};

const foo = serializeProperties(obj);

// ---
export {};
