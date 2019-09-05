export function makeAction<T extends string>(type: T): () => { type: T }
export function makeAction<
  T extends string,
  Creator extends (...args: any[]) => {}
>(
  type: T,
  creator: Creator,
): (...args: Parameters<Creator>) => ReturnType<Creator> & { type: T }
export function makeAction<
  T extends string,
  Creator extends (...args: any[]) => {}
>(type: T, creator?: Creator) {
  return creator === undefined
    ? () => ({ type })
    : (...args: Parameters<Creator>) => ({
        ...creator(...args),
        type,
      })
}
