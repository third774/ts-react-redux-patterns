import { ActionTypesFromActionMap } from "../utils/helper-types";

// Defining our actions on this map will let us derive a unioned
// action type based on the type information naturally derived
// by the type checker. Hover over todoActions to see the type.
export const todoActions = {
  addTodo: (text: string) => ({
    // using 'as const' here narrows the type from a plain string
    // to "ADD_TODO" literal value. This is the discriminant key
    // for the unioned action type
    type: "ADD_TODO" as const,
    payload: {
      text
    }
  }),
  removeTodo: (id: number) => {
    return {
      type: "REMOVE_TODO" as const,
      payload: {
        id
      }
    };
  },
  setTodoComplete: (complete: boolean, id: number) => {
    return {
      type: "SET_TODO_COMPLETE" as const,
      payload: {
        id,
        complete
      }
    };
  }
};

// We're using a type helper here to create the union of all the action
// types we will want to use in our reducer.
export type TodoAction = ActionTypesFromActionMap<typeof todoActions>;
