import { RootState } from "../store";

export const todosSelector = (state: RootState) => state.todo.todoList;
