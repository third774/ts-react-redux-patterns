import { RootState } from "../store";

export const countSelector = (state: RootState) => state.counter.count;
