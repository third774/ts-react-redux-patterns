import { ActionTypesFromActionMap } from "../utils/helper-types";

const counterActions = {
  increment: () => {
    return {
      type: "INCREMENT" as const
    };
  },
  decrement: () => {
    console.log("dec");
    return {
      type: "DECREMENT" as const
    };
  }
};

export type CounterAction = ActionTypesFromActionMap<typeof counterActions>;

export default counterActions;
