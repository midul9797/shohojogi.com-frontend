import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
export const basePaymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3333/api/v1/" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
