import api from "./axios";

/**
 * Weather API service
 * Encapsulates all weather-related API calls
 */
export const weatherApi = {
  /**
   * Fetch weather data for a specific city or coordinates
   * @param {{city?: string; lat?: number; lon?: number}} params - City name or coordinates
   * @param {string} unit - Temperature unit ('metric' or 'imperial')
   * @returns {Promise<Object>} Weather data object
   */
  getWeather: async (params, unit = "metric") => {
    const { city, lat, lon } = params;

    if (!city && (!lat || !lon)) {
      throw new Error("Please provide either a city name or latitude and longitude.");
    }

    const queryParams = new URLSearchParams({ unit });
    if (city) {
      queryParams.append("city", city);
    } else if (lat && lon) {
      queryParams.append("lat", lat);
      queryParams.append("lon", lon);
    }

    return api.get(`/weather?${queryParams.toString()}`);
  },
};

export default weatherApi;
