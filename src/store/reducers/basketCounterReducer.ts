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
      if (state.quantity > 0) {
        state.quantity--;
      } else {
        state.quantity = 0;
      }
    });
});
