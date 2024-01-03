import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const ORDER_URL = "/orders";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    placeOrder: build.mutation({
      query: (loginData) => ({
        url: `${ORDER_URL}/create-order`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getOrders: build.query({
      query: () => ({
        url: `${ORDER_URL}`,
        method: "GET",
      }),
    }),
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `${ORDER_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetOrdersQuery,
  useLazyGetOrdersQuery,
  useDeleteOrderMutation,
} = orderApi;
