import PropTypes from "prop-types";
import { Card } from "../ui/Card";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherDetails } from "./WeatherDetails";
import { capitalize } from "../../utils/formatters";

/**
 * WeatherCard component
 * Main weather display card with current conditions and details
 *
 * @param {Object} props - Component props
 * @param {Object} props.weather - Weather data object
 */
export const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <Card className="animate-fade-in">
      {/* Main Weather Display */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex items-center gap-4">
          <WeatherIcon conditions={weather.conditions} size="lg" />
          <div>
            <h2 className="text-3xl font-bold text-white">
              {weather.city}, {weather.country}
            </h2>
            <p className="text-5xl font-light text-white mt-2">
              {weather.temperature}
            </p>
            <p className="text-lg text-gray-300 capitalize mt-1">
              {capitalize(weather.conditions)}
            </p>
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <WeatherDetails weather={weather} />
    </Card>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    conditions: PropTypes.string.isRequired,
    feels_like: PropTypes.string,
    humidity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    wind_speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    visibility: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    cloud_cover: PropTypes.string,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    pressure: PropTypes.string,
  }).isRequired,
};

export default WeatherCard;
