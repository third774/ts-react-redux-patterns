import { TodoState } from "./types";
import { TodoAction } from "./todoActions";
import assertNever from "../utils/assertNever";

const defaultState = {
  todoList: []
};

export function todoReducer(
  state: TodoState = defaultState,
  action: TodoAction
): TodoState /* Must ensure return type */ {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: Math.random(),
            text: action.payload.text,
            complete: false
          }
        ]
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter(t => t.id !== action.payload.id)
      };
    case "SET_TODO_COMPLETE":
      return {
        ...state,
        todoList: state.todoList.map(t =>
          t.id === action.payload.id
            ? {
                ...t,
                complete: action.payload.complete
              }
            : t
        )
      };
    default:
      // Here we use a function that expects action to be of type
      // 'never'. This ensures we will get a compile time error if
      // any actions are not handled. And since we're putting all
      // of our actions on an indexed object, as soon as we add an
      // action, we will get a compiler error if we do not handle
      // it here!
      return assertNever(action, state);
  }
}
