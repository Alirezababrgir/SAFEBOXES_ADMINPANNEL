import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    tagTypes: ["BROKER"],
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://services.safe-boxes.io/services" }),
    endpoints: builder => ({
        PostToken: builder.mutation({
            query: (requestData) => ({
                url: `/authenticate/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        RegisterBrokerLink: builder.mutation({
            query: (requestData) => ({
                url: `/register-broker-link/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        RegisterBrokerId: builder.mutation({
            query: (requestData) => ({
                url: `/register-broker-id/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        CheckToken: builder.mutation({
            query: (requestData) => ({
                url: `/check-token/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        GetBrokerIds: builder.mutation({
            query: (requestData) => ({
                url: `/get-broker-ids/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        ListUsers: builder.mutation({
            query: (requestData) => ({
                url: `/list-users/`,
                method: "POST", // http method POST
                body: requestData
            }), invalidatesTags: ["BROKER"]
        })
    })
})
export const { usePostTokenMutation, useRegisterBrokerLinkMutation , useRegisterBrokerIdMutation, useCheckTokenMutation, useGetBrokerIdsMutation,useListUsersMutation} = apiSlice; //Select endpoints and create hook
