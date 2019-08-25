// This file contains the types local to the "todo" module
// Note that the Todo type still needs to be imported into
// whichever files are consuming it. A *.d.ts file is just
// like a regular *.ts file except it may only contain type
// information. It may not contain actual values.

export type Todo = {
  text: string;
  complete: boolean;
  id: number;
};

export type TodoState = {
  todoList: Todo[];
};
