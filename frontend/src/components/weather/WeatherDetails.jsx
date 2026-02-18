import PropTypes from "prop-types";
import {
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaEye,
  FaCloud,
  FaSun,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import {
  formatHumidity,
  formatWindSpeed,
  formatVisibility,
} from "../../utils/formatters";

/**
 * Weather detail item component
 */
const DetailItem = ({ icon: Icon, label, value, unit }) => (
  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
    <div className="text-blue-400">
      <Icon className="text-lg" />
    </div>
    <div className="flex-1">
      <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
      <p className="text-white font-medium">
        {value}
        {unit && <span className="text-gray-400 ml-1">{unit}</span>}
      </p>
    </div>
  </div>
);

DetailItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  unit: PropTypes.string,
};

/**
 * WeatherDetails component
 * Displays detailed weather information in a grid layout
 *
 * @param {Object} props - Component props
 * @param {Object} props.weather - Weather data object
 */
export const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const details = [
    {
      icon: FaTemperatureHigh,
      label: "Feels Like",
      value: weather.feels_like || "--",
    },
    {
      icon: FaTint,
      label: "Humidity",
      value: formatHumidity(weather.humidity),
    },
    {
      icon: FaWind,
      label: "Wind Speed",
      value: formatWindSpeed(weather.wind_speed),
    },
    {
      icon: FaEye,
      label: "Visibility",
      value: formatVisibility(weather.visibility),
    },
    {
      icon: FaCloud,
      label: "Cloud Cover",
      value: weather.cloud_cover || "--",
    },
    {
      icon: FaArrowUp,
      label: "Sunrise",
      value: weather.sunrise || "--",
    },
    {
      icon: FaArrowDown,
      label: "Sunset",
      value: weather.sunset || "--",
    },
    {
      icon: FaSun,
      label: "Pressure",
      value: weather.pressure || "--",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
      {details.map((detail, index) => (
        <DetailItem key={index} {...detail} />
      ))}
    </div>
  );
};

WeatherDetails.propTypes = {
  weather: PropTypes.shape({
    feels_like: PropTypes.string,
    humidity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    wind_speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    visibility: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    cloud_cover: PropTypes.string,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    pressure: PropTypes.string,
  }),
};

export default WeatherDetails;
