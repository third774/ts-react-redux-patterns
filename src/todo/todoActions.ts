import { ActionTypesFromActionMap } from "../utils/helper-types"
import { makeAction } from "../utils/makeAction"

// Defining our actions on this map will let us derive a unioned
// action type based on the type information naturally derived
// by the type checker. Hover over todoActions to see the type.
export const todoActions = {
  addTodo: makeAction("ADD_TODO", (text: string) => ({
    payload: {
      text,
    },
  })),

  removeTodo: makeAction("REMOVE_TODO", (id: number) => ({
    payload: {
      id,
    },
  })),
  setTodoComplete: makeAction(
    "SET_TODO_COMPLETE",
    (complete: boolean, id: number) => ({
      payload: {
        id,
        complete,
      },
    }),
  ),
}

// We're using a type helper here to create the union of all the action
// types we will want to use in our reducer.
export type TodoAction = ActionTypesFromActionMap<typeof todoActions>
