import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

type PostQuery = {
  limit: number;
  start: number;
};

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], PostQuery>({
      query: ({ limit = 10, start = 0 }) => ({
        url: `/posts`,
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;
