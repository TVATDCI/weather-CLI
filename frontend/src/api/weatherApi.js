import api from "./axios";

/**
 * Weather API service
 * Encapsulates all weather-related API calls
 */
export const weatherApi = {
  /**
   * Fetch weather data for a specific city
   * @param {string} city - City name to search
   * @param {string} unit - Temperature unit ('metric' or 'imperial')
   * @returns {Promise<Object>} Weather data object
   */
  getWeather: async (city, unit = "metric") => {
    if (!city?.trim()) {
      throw new Error("City name is required");
    }
    return api.get(`/weather/${encodeURIComponent(city.trim())}`, {
      params: { unit },
    });
  },
};

export default weatherApi;
