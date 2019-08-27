// This type helper takes an object with a type signature where
// every value must be a function, and it returns a type with
// all possible return values unioned together. This is how we
// get our discriminated union for our reducer!
export type ActionTypesFromActionMap<
  T extends { [K in keyof T]: (...args: any[]) => any }
> = Extract<ReturnType<T[keyof T]>, { type: string }>;
