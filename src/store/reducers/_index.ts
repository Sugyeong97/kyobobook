import { combineReducers } from "redux";
import { basketCounterReducer } from "./basketCounterReducer";

export const rootReducer = combineReducers({
  basketCounter: basketCounterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
