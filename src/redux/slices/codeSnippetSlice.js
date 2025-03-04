// slices/codeSnippetSlice.js

import { CODE_SNIPPETS_URL } from "../../constants/constants";
import { apiSlice } from "./apiSlice";

export const codeSnippetSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCodeSnippets: builder.query({
      query: () => CODE_SNIPPETS_URL,
      providesTags: ["CodeSnippet"],
    }),
    getCodeSnippetById: builder.query({
      query: (id) => `${CODE_SNIPPETS_URL}/${id}`,
      providesTags: ["CodeSnippet"],
    }),
    createCodeSnippet: builder.mutation({
      query: (snippetData) => ({
        url: CODE_SNIPPETS_URL,
        method: "POST",
        body: snippetData,
      }),
      invalidatesTags: ["CodeSnippet"],
    }),
    updateCodeSnippet: builder.mutation({
      query: ({ id, snippetData }) => ({
        url: `${CODE_SNIPPETS_URL}/${id}`,
        method: "PUT",
        body: snippetData,
      }),
      invalidatesTags: ["CodeSnippet"],
    }),
    deleteCodeSnippet: builder.mutation({
      query: (id) => ({
        url: `${CODE_SNIPPETS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CodeSnippet"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetCodeSnippetsQuery,
  useGetCodeSnippetByIdQuery,
  useCreateCodeSnippetMutation,
  useUpdateCodeSnippetMutation,
  useDeleteCodeSnippetMutation,
} = codeSnippetSlice;
