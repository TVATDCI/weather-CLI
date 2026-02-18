import { useQuery } from "@tanstack/react-query";
import weatherApi from "../api/weatherApi";

/**
 * Custom hook for fetching weather data using TanStack Query.
 * It automatically handles caching, refetching, and loading/error states.
 *
 * @param {string} city - The city to fetch weather for.
 * @param {string} unit - The unit for temperature ('metric' or 'imperial').
 * @returns {import("@tanstack/react-query").UseQueryResult} The result object from useQuery.
 */
export const useWeather = (city, unit = "metric") => {
  return useQuery({
    queryKey: ["weather", city, unit],
    queryFn: () => weatherApi.getWeather(city, unit),
    queryOptions: {
      enabled: !!city, // Only run the query if a city is provided
      staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
      retry: 1, // Retry failed requests once
    },
  });
};

export default useWeather;
