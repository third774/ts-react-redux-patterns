import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import { TodoList } from "./todo/TodoList";
import Counter from "./counter/Counter";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter title="Some Counter" />
        <hr />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
