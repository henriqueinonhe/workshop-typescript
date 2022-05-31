type ValuesType<T> = T[keyof T];

const Directions = {
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
} as const;

type Direction = ValuesType<typeof Directions>;

const obj: {
  direction: Direction;
} = {
  direction: Directions.Down,
};

let string = "Up" as const;

const direction: Direction = string;

export {};
