import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    userSignup: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserLoginMutation, useUserSignupMutation } = authApi;
