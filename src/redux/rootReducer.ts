import { baseApi, basePaymentApi } from "./api/baseApi";
import addToCartSliceReducer from "./features/addToCartSlice";
export const reducer = {
  addToCart: addToCartSliceReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [basePaymentApi.reducerPath]: basePaymentApi.reducer,
};
