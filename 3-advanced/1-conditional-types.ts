export type A = never extends string ? true : false;
export type B = {} extends number ? true : false;
export type C = number extends {} ? true : false;
export type D = number extends Record<string, never> ? true : false;

// --------------------------
