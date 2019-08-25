import { createStore, combineReducers, Reducer } from "redux";
import { todoReducer } from "./todo/todoReducer";
import { counterReducer } from "./counter/counterReducer";

const reducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer
});

type StateFromReducer<T extends Reducer<any>> = T extends Reducer<infer S>
  ? S
  : never;

export type RootState = StateFromReducer<typeof reducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => any;
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
