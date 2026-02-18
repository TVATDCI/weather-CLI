import { useState, useCallback } from "react";
import { weatherApi } from "../api/weatherApi";

/**
 * Custom hook for fetching and managing weather data
 * Encapsulates all weather-related state and logic
 *
 * @returns {Object} Weather state and actions
 */
export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fetch weather data for a city
   * @param {string} city - City name to search
   * @param {string} unit - Temperature unit ('metric' or 'imperial')
   */
  const fetchWeather = useCallback(async (city, unit = "metric") => {
    if (!city?.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await weatherApi.getWeather(city, unit);
      setWeather(data);
    } catch (err) {
      setError(err.message || "Failed to fetch weather data");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Clear weather data and reset state
   */
  const clearWeather = useCallback(() => {
    setWeather(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    weather,
    loading,
    error,
    fetchWeather,
    clearWeather,
  };
};

export default useWeather;
