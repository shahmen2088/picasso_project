import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

type PostQuery = {
  postQuery: string;
  limit: number;
};
export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], PostQuery>({
      query: () => '/posts',
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
