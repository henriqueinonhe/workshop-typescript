// Primitive Types
const string: string = "Some string";
const number: number = 12234.3546;
const boolean: boolean = false;

const stringFun = (arg: string): string => arg.toUpperCase();
const numberFun = (arg: number): number => arg / 2;
const booleanFun = (arg: boolean): boolean => !arg;

stringFun(string);
stringFun(number);
stringFun(boolean);

numberFun(string);
numberFun(number);
numberFun(boolean);

booleanFun(string);
booleanFun(number);
booleanFun(boolean);

export {};
