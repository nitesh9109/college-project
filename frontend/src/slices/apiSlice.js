import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://college-project-gq5i.onrender.com",
  }),
  tagTypes: ["User"],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
