// slices/codeSnippetSlice.js

import { CODE_SNIPPETS_URL } from "../../constants/constants";
import { apiSlice } from "./apiSlice";

export const codeSnippetSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCodeSnippets: builder.query({
      query: () => CODE_SNIPPETS_URL,
    }),
    createCodeSnippet: builder.mutation({
      query: (snippetData) => ({
        url: CODE_SNIPPETS_URL,
        method: "POST",
        body: snippetData,
      }),
    }),
    updateCodeSnippet: builder.mutation({
      query: ({ id, snippetData }) => ({
        url: `${CODE_SNIPPETS_URL}/${id}`,
        method: "PUT",
        body: snippetData,
      }),
    }),
    deleteCodeSnippet: builder.mutation({
      query: (id) => ({
        url: `${CODE_SNIPPETS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetCodeSnippetsQuery,
  useCreateCodeSnippetMutation,
  useUpdateCodeSnippetMutation,
  useDeleteCodeSnippetMutation,
} = codeSnippetSlice;
