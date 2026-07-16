import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "./../../env";

export const trackApi = createApi({
    reducerPath: "tracks",
    baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }),
    tagTypes: ["tracks"],
    endpoints: (build) => ({
        getTracks: build.query({
            query: () => ({
                url: "track"
            }),
            providesTags: ["tracks"]
        }),
        createTrack: build.mutation({
            query: (track) => ({
                url: "track",
                method: "POST",
                body: track
            }),
            invalidatesTags: ["tracks"]
        })
    })
});

export const { useCreateTrackMutation, useGetTracksQuery } = trackApi;