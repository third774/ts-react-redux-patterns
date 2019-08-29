import { createStore, combineReducers, Reducer } from "redux";
import { todoReducer } from "./todo/todoReducer";
import { counterReducer } from "./counter/counterReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => any;
  }
}

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
