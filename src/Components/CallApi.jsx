
import React from "react"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl:"http://localhost:3000/products", 
    credentials: "include",
  }),
  
  tagTypes: ['User'],
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => "/app",
      providesTags: ['User'],
    }),
   /* createUser: builder.mutation({
      query: (user) => ({
        url: "user",
        method: "POST",
        body: user,
      }),
    }),
    */
  }),
});

export const {useFetchUserQuery} = usersApi
