export default function assertNever<T>(_: never, state: T) {
  return state;
}
