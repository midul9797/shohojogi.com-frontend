import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const SERVICE_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/create-service`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getServices: build.query({
      query: () => ({
        url: `${SERVICE_URL}`,
        method: "GET",
      }),
    }),
    getService: build.query({
      query: (id) => ({
        url: `${SERVICE_URL}/${id.id}`,
        method: "GET",
      }),
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddServiceMutation,
  useDeleteServiceMutation,
  useGetServiceQuery,
  useGetServicesQuery,
  useLazyGetServicesQuery,
  useLazyGetServiceQuery,
  useUpdateServiceMutation,
} = serviceApi;
