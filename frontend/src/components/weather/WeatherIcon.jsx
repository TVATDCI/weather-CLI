import PropTypes from "prop-types";
import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaSnowflake,
  FaBolt,
  FaSmog,
  FaCloudSun,
} from "react-icons/fa";
import { getWeatherIcon } from "../../utils/weatherCodes";

/**
 * Weather icon mapping to React Icons
 */
const iconMap = {
  clear: FaSun,
  clouds: FaCloud,
  rain: FaCloudRain,
  drizzle: FaCloudRain,
  snow: FaSnowflake,
  thunderstorm: FaBolt,
  fog: FaSmog,
  default: FaCloudSun,
};

/**
 * Icon sizes configuration
 */
const sizes = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-6xl",
  xl: "text-8xl",
};

/**
 * WeatherIcon component
 * Displays appropriate weather icon based on conditions
 *
 * @param {Object} props - Component props
 * @param {string} props.conditions - Weather conditions description
 * @param {string} props.size - Icon size
 * @param {string} props.className - Additional CSS classes
 */
export const WeatherIcon = ({
  conditions,
  size = "md",
  className = "",
  ...props
}) => {
  const iconName = getWeatherIcon(conditions);
  const IconComponent = iconMap[iconName] || iconMap.default;

  return (
    <div className={`weather-icon ${sizes[size]} ${className}`} {...props}>
      <IconComponent />
    </div>
  );
};

WeatherIcon.propTypes = {
  conditions: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};

export default WeatherIcon;
