import React from "react";
import { useDispatch } from "react-redux";
import { Todo } from "./types";
import { todoActions } from "./todoActions";

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  const handleToggleComplete = () => {
    dispatch(todoActions.setTodoComplete(!todo.complete, todo.id));
  };

  const handleRemove = () => {
    dispatch(todoActions.removeTodo(todo.id));
  };

  return (
    <li style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
      <button onClick={handleToggleComplete}>
        {todo.complete ? "mark incomplete" : "mark complete"}
      </button>
      {todo.text}
      <button onClick={handleRemove}>remove</button>
    </li>
  );
};
