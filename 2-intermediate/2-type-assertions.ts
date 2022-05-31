// Casting To More Specific Type
type Dog = {
  name: string;
  type: "Dog";
};

type Cat = {
  name: string;
  type: "Cat";
};

type Pet = Dog | Cat;

const pets: Array<Pet> = [
  /*...*/
];
const dogs = pets.filter((pet) => pet.type === "Dog") as Array<Dog>;
const cats = pets.filter((pet) => pet.type === "Cat") as Array<Cat>;

// Incompatible Casting
type First = {
  a: number;
  b: string;
};

type Second = {
  b: string;
  c: boolean;
};

const first: First = {
  a: 234,
  b: "asdasd",
} as Second;

const second: Second = {
  b: "asdasd",
  c: false,
} as First;

// Force Casting
const foo = "adasdasd" as unknown as number;

// Enum Alternative
const Directions = {
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
} as const;

export {};
