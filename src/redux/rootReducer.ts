import { baseApi, basePaymentApi } from "./api/baseApi";
import addToCartSliceReducer from "./features/addToCartSlice";
import docEditorSliceReducer from "./features/docEditorSlice";
export const reducer = {
  addToCart: addToCartSliceReducer,
  docEditor: docEditorSliceReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [basePaymentApi.reducerPath]: basePaymentApi.reducer,
};
