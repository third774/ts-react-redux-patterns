import { CounterAction } from "./counterActions";
import assertNever from "../utils/assertNever";

type CounterState = {
  count: number;
};

const defaultState = {
  count: 0
};

export function counterReducer(
  state: CounterState = defaultState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return assertNever(action, state);
  }
}
