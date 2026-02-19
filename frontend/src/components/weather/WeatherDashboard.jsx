import {
  Thermometer,
  Wind,
  Droplets,
  Sun,
  Cloudy,
  CloudRain,
  CloudSnow,
} from "lucide-react";
import { useWeather } from "../../hooks/useWeather";
import { Card } from "../ui/Card";
import { WeatherSkeleton } from "../ui/Skeleton";
import { formatTemperature, formatWindSpeed } from "../../utils/formatters";

// A mapping from weather condition to a Lucide icon component
const weatherIconMap = {
  clear: Sun,
  clouds: Cloudy,
  rain: CloudRain,
  snow: CloudSnow,
  default: Cloudy,
};

const WeatherIcon = ({ condition, ...props }) => {
  const Icon =
    weatherIconMap[condition?.toLowerCase()] || weatherIconMap.default;
  return <Icon {...props} />;
};

const WeatherDashboard = ({ city, lat, lon, unit }) => {
  const {
    data: weather,
    isLoading,
    error,
  } = useWeather(lat && lon ? { lat, lon } : { city }, unit);

  if (isLoading) return <WeatherSkeleton />;
  if (error)
    return (
      <div className="text-center text-red-400">
        Error: {error.message}
      </div>
    );
  if (!weather)
    return (
      <div className="text-center py-12 text-gray-400 text-lg">
        Enter a city name or enable geolocation to get the current weather
      </div>
    );

  return (
    <main className="bento-grid">
      {/* Main Weather Tile */}
      <Card
        className="glass-card md:col-span-2 md:row-span-2 flex flex-col items-center justify-center text-center"
        hover
      >
        <h2 className="text-4xl font-bold">
          {weather.city}, {weather.country}
        </h2>
        <div className="my-4">
          <WeatherIcon
            condition={weather.conditions}
            className="w-24 h-24 text-yellow-300"
          />
        </div>
        <p className="text-7xl font-light">
          {formatTemperature(
            weather.temperature,
            unit === "metric" ? "C" : "F"
          )}
        </p>
        <p className="text-xl capitalize text-gray-300">
          {weather.conditions}
        </p>
      </Card>

      {/* Forecast Tile */}
      <Card className="glass-card md:col-span-2 text-center" hover>
        <h3 className="text-xl font-semibold mb-4">Hourly Forecast</h3>
        <div className="flex justify-around">
          {/* Placeholder for hourly forecast */}
          <div className="flex flex-col items-center">
            <p>Now</p>
            <Sun className="w-8 h-8" />
            <p>
              {formatTemperature(
                weather.temperature,
                unit === "metric" ? "C" : "F"
              )}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p>1hr</p>
            <Cloudy className="w-8 h-8" />
            <p>
              {formatTemperature(
                weather.temperature - 1,
                unit === "metric" ? "C" : "F"
              )}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p>2hr</p>
            <Cloudy className="w-8 h-8" />
            <p>
              {formatTemperature(
                weather.temperature - 1,
                unit === "metric" ? "C" : "F"
              )}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p>3hr</p>
            <CloudRain className="w-8 h-8" />
            <p>
              {formatTemperature(
                weather.temperature - 2,
                unit === "metric" ? "C" : "F"
              )}
            </p>
          </div>
        </div>
      </Card>

      {/* Humidity Tile */}
      <Card className="glass-card text-center" hover>
        <h3 className="text-lg font-semibold text-gray-300">Humidity</h3>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Droplets className="w-8 h-8 text-blue-300" />
          <p className="text-3xl font-bold">{weather.humidity}%</p>
        </div>
      </Card>

      {/* Wind Speed Tile */}
      <Card className="glass-card text-center" hover>
        <h3 className="text-lg font-semibold text-gray-300">Wind Speed</h3>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Wind className="w-8 h-8 text-gray-300" />
          <p className="text-3xl font-bold">
            {formatWindSpeed(weather.windSpeed, unit)}
          </p>
        </div>
      </Card>

      {/* Feels Like Tile */}
      <Card className="glass-card text-center" hover>
        <h3 className="text-lg font-semibold text-gray-300">Feels Like</h3>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Thermometer className="w-8 h-8 text-orange-300" />
          <p className="text-3xl font-bold">
            {formatTemperature(
              weather.feelsLike,
              unit === "metric" ? "C" : "F"
            )}
          </p>
        </div>
      </Card>

      {/* Pressure Tile */}
      <Card className="glass-card text-center" hover>
        <h3 className="text-lg font-semibold text-gray-300">Pressure</h3>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="text-3xl font-bold">{weather.pressure} hPa</div>
        </div>
      </Card>
    </main>
  );
};

export default WeatherDashboard;
