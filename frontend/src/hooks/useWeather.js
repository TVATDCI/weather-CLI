import { useQuery } from "@tanstack/react-query";
import weatherApi from "../api/weatherApi";

/**
 * Custom hook for fetching weather data using TanStack Query.
 * It automatically handles caching, refetching, and loading/error states.
 *
 * @param {{city?: string; lat?: number; lon?: number}} params - The location parameters (city or coordinates).
 * @param {string} unit - The unit for temperature ('metric' or 'imperial').
 * @returns {import("@tanstack/react-query").UseQueryResult} The result object from useQuery.
 */
export const useWeather = (params, unit = "metric") => {
  const { city, lat, lon } = params;

  // Create a stable query key by explicitly stringifying the params
  // This ensures React Query properly detects changes between city and coords
  const queryKey = city
    ? ["weather", "city", city, unit]
    : ["weather", "coords", lat, lon, unit];

  return useQuery({
    queryKey: queryKey,
    queryFn: () => weatherApi.getWeather(params, unit),
    enabled: !!(city || (lat && lon)), // Only run the query if location params are provided
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    retry: 1, // Retry failed requests once
  });
};

export default useWeather;
