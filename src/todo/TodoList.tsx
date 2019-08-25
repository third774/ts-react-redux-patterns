import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "./todoSelectors";
import { todoActions } from "./todoActions";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") return;
    dispatch(todoActions.addTodo(text));
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map(t => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </ul>
    </div>
  );
};
