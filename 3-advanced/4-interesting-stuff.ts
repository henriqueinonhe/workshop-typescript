type UserData = {
  id: string;
  name: string;
  age: number;
};

type WithGetters<T extends Record<string, unknown>> = {
  [Key in keyof T as `get${Capitalize<Extract<Key, string>>}`]: () => T[Key];
};

type WithSetters<T extends Record<string, unknown>> = {
  [Key in keyof T as `set${Capitalize<Extract<Key, string>>}`]: (
    value: T[Key]
  ) => void;
};

type User = WithGetters<UserData> & WithSetters<UserData>;

const createUser = (data: UserData): User => {
  let { id, name, age } = data;

  return {
    getId: () => id,
    getName: () => name,
    getAge: () => age,
    setId: (value: string) => {
      id = value;
    },
    setName: (value: string) => {
      name = value;
    },
    setAge: (value: number) => {
      age = value;
    },
  };
};

type AltUser = WithGetters<UserData> & WithSetters<Omit<UserData, "id">>;

// --------------------------

const getUser = <Relations extends keyof Omit<UserData, "id">>(
  id: string,
  relations: Array<Relations>
): Pick<UserData, Relations | "id"> => {
  return {
    //...
  } as unknown as Pick<UserData, Relations | "id">;
};

const user = getUser("1", ["age"]);

// -------------------------

import { Schema } from "jsonschema";

type PrimitiveType = number | string | boolean | null;

type PrimitiveTypeString = "number" | "string" | "boolean" | "null" | "integer";

type NumberTypeString = "number" | "integer";

type TwoPermutation<
  T1 extends PrimitiveTypeString,
  T2 extends PrimitiveTypeString
> = [T1, T2] | [T2, T1];

type ThreePermutation<
  T1 extends PrimitiveTypeString,
  T2 extends PrimitiveTypeString,
  T3 extends PrimitiveTypeString
> =
  | [T1, T2, T3]
  | [T1, T3, T2]
  | [T2, T1, T3]
  | [T2, T3, T1]
  | [T3, T2, T1]
  | [T3, T1, T2];

type FourPermutation<
  T1 extends PrimitiveTypeString,
  T2 extends PrimitiveTypeString,
  T3 extends PrimitiveTypeString,
  T4 extends PrimitiveTypeString
> =
  | [T1, T2, T3, T4]
  | [T2, T1, T3, T4]
  | [T3, T1, T2, T4]
  | [T1, T3, T2, T4]
  | [T2, T3, T1, T4]
  | [T3, T2, T1, T4]
  | [T3, T2, T4, T1]
  | [T2, T3, T4, T1]
  | [T4, T3, T2, T1]
  | [T3, T4, T2, T1]
  | [T2, T4, T3, T1]
  | [T4, T2, T3, T1]
  | [T4, T1, T3, T2]
  | [T1, T4, T3, T2]
  | [T3, T4, T1, T2]
  | [T4, T3, T1, T2]
  | [T1, T3, T4, T2]
  | [T3, T1, T4, T2]
  | [T2, T1, T4, T3]
  | [T1, T2, T4, T3]
  | [T4, T2, T1, T3]
  | [T2, T4, T1, T3]
  | [T1, T4, T2, T3]
  | [T4, T1, T2, T3];

type RequiredWrappedProperty<Type> = [undefined] extends [Type]
  ? { required?: false }
  : { required: true };

type JSONSchemaPrimitiveType<Type extends PrimitiveType | undefined> = ([
  Type
] extends [number | undefined]
  ? { type: NumberTypeString }
  : [Type] extends [string | undefined]
  ? { type: "string" }
  : [Type] extends [boolean | undefined]
  ? { type: "boolean" }
  : [Type] extends [null | undefined]
  ? { type: "null" }
  : [Type] extends [number | string | undefined]
  ? { type: TwoPermutation<NumberTypeString, "string"> }
  : [Type] extends [number | boolean | undefined]
  ? { type: TwoPermutation<NumberTypeString, "boolean"> }
  : [Type] extends [number | null | undefined]
  ? { type: TwoPermutation<NumberTypeString, "null"> }
  : [Type] extends [string | boolean | undefined]
  ? { type: TwoPermutation<"string", "boolean"> }
  : [Type] extends [string | null | undefined]
  ? { type: TwoPermutation<"string", "null"> }
  : [Type] extends [boolean | null | undefined]
  ? { type: TwoPermutation<"boolean", "null"> }
  : [Type] extends [number | string | boolean | undefined]
  ? { type: ThreePermutation<NumberTypeString, "string", "boolean"> }
  : [Type] extends [number | string | null | undefined]
  ? { type: ThreePermutation<NumberTypeString, "string", "null"> }
  : [Type] extends [number | boolean | null | undefined]
  ? { type: ThreePermutation<NumberTypeString, "boolean", "null"> }
  : [Type] extends [string | boolean | null | undefined]
  ? { type: ThreePermutation<"string", "boolean", "null"> }
  : [Type] extends [number | string | boolean | null | undefined]
  ? { type: FourPermutation<NumberTypeString, "string", "boolean", "null"> }
  : unknown) &
  RequiredWrappedProperty<Type>;

export type JSONSchemaArrayType<Type extends Array<any>> = [Type] extends [
  Array<infer Item>
]
  ? {
      type: "array";
      required: true;
      items: JSONSchemaType<Item>;
    }
  : never;

export type JSONSchemaType<Type> = ([Type] extends [PrimitiveType | undefined]
  ? JSONSchemaPrimitiveType<Type>
  : [Type] extends [Array<any>]
  ? JSONSchemaArrayType<Type>
  : [Type] extends [object]
  ? {
      type: "object";
      required: true;
      properties: {
        [Key in keyof Type]: JSONSchemaType<Type[Key]>;
      };
    }
  :
      | {
          oneOf: Array<
            | JSONSchemaType<Extract<Type, PrimitiveType | undefined>>
            | JSONSchemaType<Extract<Exclude<Type, PrimitiveType>, Array<any>>>
            | JSONSchemaType<Exclude<Type, PrimitiveType | Array<any>>>
          >;
        }
      | {
          allOf: Array<
            | JSONSchemaType<Extract<Type, PrimitiveType | undefined>>
            | JSONSchemaType<Extract<Exclude<Type, PrimitiveType>, Array<any>>>
            | JSONSchemaType<Exclude<Type, PrimitiveType | Array<any>>>
          >;
        }) &
  Schema;

export type Test = JSONSchemaType<UserData>;

export {};
