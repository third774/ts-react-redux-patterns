import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "./todoSelectors";
import { todoActions } from "./todoActions";
import { TodoItem } from "./TodoItem";
import Form from "../common/Form";
import Input from "../common/Input";

export const TodoList: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (text === "") return;
    dispatch(todoActions.addTodo(text));
    setText("");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input value={text} onChange={setText} />
        <button type="submit">Add Todo</button>
      </Form>

      <ul>
        {todos.map(t => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </ul>
    </div>
  );
};
