import { createReducer } from "@reduxjs/toolkit";
import {
  decreaseProduct,
  increaseProduct,
} from "../actions/basketCounterActions";

interface basketCounterState {
  quantity: number;
}

const initialState: basketCounterState = {
  quantity: 0,
};

export const basketCounterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increaseProduct, (state) => {
      state.quantity++;
    })
    .addCase(decreaseProduct, (state) => {
      state.quantity = state.quantity <= 0 ? 0 : state.quantity--;
    });
});
