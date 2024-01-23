import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const PROFILE_URL = "/users";
const ADMIN_URL = "/admins";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: () => ({
        url: `${PROFILE_URL}/my-profile`,
        method: "GET",
      }),
    }),

    updateProfile: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}/my-profile`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    makeAdmin: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/make-admin`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useProfileQuery,
  useLazyProfileQuery,
  useUpdateProfileMutation,
  useMakeAdminMutation,
} = authApi;
