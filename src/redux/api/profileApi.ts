import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const PROFILE_URL = "/profile";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: () => ({
        url: `${PROFILE_URL}`,
        method: "GET",
      }),
    }),

    updateProfile: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    makeAdmin: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}/make-admin`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useProfileQuery,
  useUpdateProfileMutation,
  useMakeAdminMutation,
} = authApi;
