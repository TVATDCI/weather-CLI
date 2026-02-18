import { QueryClient } from "@tanstack/react-query";

/**
 * Creates and configures a new TanStack Query client.
 *
 * This instance can be used throughout the application to manage server state.
 * It's configured with default options that can be overridden on a per-query basis.
 *
 * @see https://tanstack.com/query/v5/docs/react/reference/QueryClient
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // It's often a good practice to set a staleTime to avoid refetching too often
      staleTime: 1000 * 60 * 5, // 5 minutes
      // It's also good to set a garbage collection time (cacheTime in v5)
      gcTime: 1000 * 60 * 15, // 15 minutes
      // Default to retrying failed queries once
      retry: 1,
      // Prevents queries from refetching on window focus
      refetchOnWindowFocus: false,
    },
  },
});
