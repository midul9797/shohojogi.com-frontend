import { tagTypes } from "../tag-types";
import { basePaymentApi } from "./baseApi";
const PAYMENT_URL = "/payment";

export const paymentApi = basePaymentApi.injectEndpoints({
  endpoints: (build) => ({
    initPayment: build.mutation({
      query: (data) => ({
        url: `${PAYMENT_URL}/init`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.payment],
    }),
  }),
});

export const { useInitPaymentMutation } = paymentApi;
