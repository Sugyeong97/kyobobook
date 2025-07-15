import { createReducer } from "@reduxjs/toolkit";
import { darkMode, lightMode } from "../actions/colorModeActions";

interface colorModeState {
  mode: void;
}
const initialState: colorModeState = {
  mode: undefined,
};

export const colorModeReducer = createReducer(initialState, (builder) => {
  builder.addCase(darkMode, (state) => {
    state.mode = alert("dark");
  });
});
