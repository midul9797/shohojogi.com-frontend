import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  options: [],
  total: 0,
  name: "",
};
const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    addService: (state, action) => {
      const existing: any = state.options.find(
        (service: any) => service.name === action.payload.name
      );

      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.options.push({ ...action.payload, quantity: 1 });
      }

      state.total += parseInt(action.payload.price);
    },
    removeService: (state, action) => {
      const existing = state.options.find(
        (service: any) => service.name === action.payload.name
      );

      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.options = state.options.filter(
          (product: any) => product.name !== action.payload.name
        );
      }
      if (existing) state.total -= parseInt(action.payload.price);
    },
  },
});

export const { setName, addService, removeService } = addToCartSlice.actions;

export default addToCartSlice.reducer;
