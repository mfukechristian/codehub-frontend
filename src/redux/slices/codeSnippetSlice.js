// slices/codeSnippetSlice.js
import { CODE_SNIPPETS_URL } from "../../constants/constants";
import { apiSlice } from "./apiSlice";

export const codeSnippetSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCodeSnippets: builder.query({
      query: () => CODE_SNIPPETS_URL,
      providesTags: (result = []) => [
        { type: "CodeSnippet", id: "LIST" },
        ...result.map(({ _id }) => ({ type: "CodeSnippet", id: _id })),
      ],
    }),
    getCodeSnippetById: builder.query({
      query: (id) => `${CODE_SNIPPETS_URL}/${id}`,
      providesTags: (_result, _error, id) => [{ type: "CodeSnippet", id }],
    }),
    createCodeSnippet: builder.mutation({
      query: (snippetData) => ({
        url: CODE_SNIPPETS_URL,
        method: "POST",
        body: snippetData,
      }),
      invalidatesTags: [{ type: "CodeSnippet", id: "LIST" }],
    }),
    updateCodeSnippet: builder.mutation({
      query: ({ id, snippetData }) => ({
        url: `${CODE_SNIPPETS_URL}/${id}`,
        method: "PUT",
        body: snippetData,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "CodeSnippet", id },
        { type: "CodeSnippet", id: "LIST" },
      ],
    }),
    deleteCodeSnippet: builder.mutation({
      query: (id) => ({
        url: `${CODE_SNIPPETS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "CodeSnippet", id },
        { type: "CodeSnippet", id: "LIST" },
      ],
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
