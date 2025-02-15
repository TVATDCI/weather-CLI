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

        const textData = await response.text(); // Your API returns preformatted text
        setWeather(textData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); // Don't forget to add city as a dependency when using it in the effect
  // What happens is if city changes, the effect will run again with the new city

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-auto">
      {weather}
    </pre>
  );
};

export default WeatherFetcher;
