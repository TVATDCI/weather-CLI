import { useState, useEffect } from "react";

const WeatherFetcher = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`http://localhost:3003/weather/${city}`);
        if (!response.ok) throw new Error("Failed to fetch weather data");

        const jsonData = await response.json(); // ✅ Correctly parse JSON
        setWeather(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); // Rerun fetch when city changes

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-gray-800 text-green-300 p-4 rounded-lg overflow-auto">
      <h2 className="text-xl font-bold">
        {weather.city}, {weather.country}
      </h2>
      <p>🌡 Temperature: {weather.temperature}</p>
      <p>🥶 Feels Like: {weather.feels_like}</p>
      <p>🌤 Conditions: {weather.conditions}</p>
      <p>💨 Wind Speed: {weather.wind_speed}</p>
      <p>☁️ Cloud Cover: {weather.cloud_cover}</p>
      <p>🔆 Sunrise: {weather.sunrise}</p>
      <p>🌅 Sunset: {weather.sunset}</p>
    </div>
  );
};

export default WeatherFetcher;
