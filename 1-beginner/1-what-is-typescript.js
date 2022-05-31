// Primitive Types
const string = "Some string";
const number = 12234.3546;
const boolean = false;

const stringFun = (arg) => arg.toUpperCase();
const numberFun = (arg) => arg / 2;
const booleanFun = (arg) => !arg;

stringFun(string);
stringFun(number);
stringFun(boolean);

numberFun(string);
numberFun(number);
numberFun(boolean);

booleanFun(string);
booleanFun(number);
booleanFun(boolean);
