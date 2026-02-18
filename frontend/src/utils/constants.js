/**
 * Application constants
 * Centralized configuration values
 */

/**
 * API configuration
 */
export const API_CONFIG = {
  TIMEOUT: 10000,
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
};

/**
 * Temperature units
 */
export const TEMPERATURE_UNITS = {
  METRIC: "metric",
  IMPERIAL: "imperial",
};

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  LAST_CITY: "weather-app-last-city",
  PREFERRED_UNIT: "weather-app-preferred-unit",
  RECENT_SEARCHES: "weather-app-recent-searches",
};

/**
 * Default values
 */
export const DEFAULTS = {
  CITY: "",
  UNIT: TEMPERATURE_UNITS.METRIC,
  MAX_RECENT_SEARCHES: 5,
};

/**
 * Weather condition categories
 */
export const WEATHER_CATEGORIES = {
  THUNDERSTORM: "2",
  DRIZZLE: "3",
  RAIN: "5",
  SNOW: "6",
  ATMOSPHERE: "7",
  CLEAR: "800",
  CLOUDS: "8",
};

export default {
  API_CONFIG,
  TEMPERATURE_UNITS,
  STORAGE_KEYS,
  DEFAULTS,
  WEATHER_CATEGORIES,
};
