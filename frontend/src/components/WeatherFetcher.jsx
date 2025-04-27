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
      <ul className="mt-2">
        {Object.entries(weather).map(
          ([key, value]) =>
            key !== "city" &&
            key !== "country" && ( // Exclude city/country from list
              <li key={key} className="capitalize">
                <strong>{key.replace("_", " ")}:</strong> {value}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default WeatherFetcher;
