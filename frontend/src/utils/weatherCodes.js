/**
 * Weather code mappings for OpenWeatherMap API
 * Maps weather condition codes to icons and background gradients
 */

/**
 * Weather style configuration for each weather type
 * @typedef {Object} WeatherStyle
 * @property {string} icon - Icon identifier
 * @property {string} gradient - Tailwind gradient classes
 * @property {string} description - Human-readable description
 */

/**
 * Weather code to style mapping
 * Based on OpenWeatherMap weather codes
 */
export const weatherCodeMap = {
  // Thunderstorm (2xx)
  thunderstorm: {
    icon: "thunderstorm",
    gradient: "from-gray-800 via-purple-900 to-gray-900",
    description: "Thunderstorm",
  },

  // Drizzle (3xx)
  drizzle: {
    icon: "drizzle",
    gradient: "from-gray-600 via-blue-800 to-gray-700",
    description: "Light rain",
  },

  // Rain (5xx)
  rain: {
    icon: "rain",
    gradient: "from-blue-900 via-slate-800 to-blue-900",
    description: "Rainy",
  },

  // Snow (6xx)
  snow: {
    icon: "snow",
    gradient: "from-blue-200 via-slate-100 to-gray-300",
    description: "Snowy",
  },

  // Atmosphere - fog, mist, haze, etc. (7xx)
  atmosphere: {
    icon: "fog",
    gradient: "from-gray-400 via-gray-500 to-gray-600",
    description: "Foggy",
  },

  // Clear sky (800)
  clear: {
    icon: "clear",
    gradient: "from-blue-400 via-sky-500 to-blue-600",
    description: "Clear",
  },

  // Clouds (80x)
  clouds: {
    icon: "clouds",
    gradient: "from-gray-500 via-slate-600 to-gray-700",
    description: "Cloudy",
  },

  // Default fallback
  default: {
    icon: "default",
    gradient: "from-blue-900 via-purple-900 to-pink-900",
    description: "Weather",
  },
};

/**
 * Get weather style based on OpenWeatherMap weather code
 * @param {number} code - OpenWeatherMap weather condition code
 * @returns {WeatherStyle} Weather style configuration
 */
export const getWeatherStyle = (code) => {
  if (!code) return weatherCodeMap.default;

  const codeStr = String(code);

  // Clear sky (800)
  if (codeStr === "800") {
    return weatherCodeMap.clear;
  }

  // Get the category (first digit)
  const category = codeStr.charAt(0);

  // Map category to style
  const categoryMap = {
    2: "thunderstorm",
    3: "drizzle",
    5: "rain",
    6: "snow",
    7: "atmosphere",
    8: "clouds",
  };

  const weatherType = categoryMap[category] || "default";
  return weatherCodeMap[weatherType];
};

/**
 * Get weather icon name based on conditions string
 * @param {string} conditions - Weather conditions description
 * @returns {string} Icon identifier
 */
export const getWeatherIcon = (conditions) => {
  if (!conditions) return "default";

  const lowerConditions = conditions.toLowerCase();

  if (lowerConditions.includes("thunder")) return "thunderstorm";
  if (lowerConditions.includes("drizzle")) return "drizzle";
  if (lowerConditions.includes("rain")) return "rain";
  if (lowerConditions.includes("snow")) return "snow";
  if (lowerConditions.includes("fog") || lowerConditions.includes("mist"))
    return "fog";
  if (lowerConditions.includes("clear")) return "clear";
  if (lowerConditions.includes("cloud")) return "clouds";

  return "default";
};

export default {
  weatherCodeMap,
  getWeatherStyle,
  getWeatherIcon,
};
