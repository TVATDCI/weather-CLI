/**
 * Formatter utility functions
 * Standardized formatting for weather data display
 */

/**
 * Format temperature with unit
 * @param {string|number} temp - Temperature value (may include unit from API)
 * @param {string} unit - Temperature unit ('C' or 'F')
 * @returns {string} Formatted temperature string
 */
export const formatTemperature = (temp, unit = "C") => {
  // Handle if temp already includes unit (from backend)
  if (typeof temp === "string" && temp.includes("°")) {
    return temp;
  }
  const numTemp = typeof temp === "string" ? parseFloat(temp) : temp;
  return `${Math.round(numTemp)}°${unit}`;
};

/**
 * Format Unix timestamp to localized time
 * @param {number} timestamp - Unix timestamp in seconds
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted time string
 */
export const formatTime = (timestamp, options = {}) => {
  if (!timestamp) return "--";

  const defaultOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
    ...defaultOptions,
    ...options,
  });
};

/**
 * Format visibility distance
 * @param {number|string} meters - Visibility in meters or formatted string
 * @returns {string} Formatted visibility string
 */
export const formatVisibility = (meters) => {
  // Handle if already formatted (from backend)
  if (typeof meters === "string") {
    return meters;
  }
  return `${(meters / 1000).toFixed(1)} km`;
};

/**
 * Format wind speed with unit
 * @param {string|number} speed - Wind speed
 * @param {string} unit - Speed unit
 * @returns {string} Formatted wind speed string
 */
export const formatWindSpeed = (speed, unit = "m/s") => {
  // Handle if already formatted (from backend)
  if (typeof speed === "string") {
    return speed;
  }
  return `${speed} ${unit}`;
};

/**
 * Format humidity percentage
 * @param {number|string} humidity - Humidity value
 * @returns {string} Formatted humidity string
 */
export const formatHumidity = (humidity) => {
  if (typeof humidity === "string" && humidity.includes("%")) {
    return humidity;
  }
  return `${humidity}%`;
};

/**
 * Format pressure with unit
 * @param {number|string} pressure - Pressure value
 * @returns {string} Formatted pressure string
 */
export const formatPressure = (pressure) => {
  if (typeof pressure === "string" && pressure.includes("hPa")) {
    return pressure;
  }
  return `${pressure} hPa`;
};

/**
 * Capitalize first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  if (!str) return "";
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
