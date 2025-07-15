import { combineReducers } from "redux";
import { basketCounterReducer } from "./basketCounterReducer";
import { colorModeReducer } from "./colorModeReducer";

export const rootReducer = combineReducers({
  basketCounter: basketCounterReducer,
  colorMode: colorModeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
