import { useState, useEffect } from "react";
import { Header, Container, Background } from "./components/layout";
import WeatherDashboard from "./components/weather/WeatherDashboard";
import WeatherSearch from "./components/weather/WeatherSearch";
import useGeolocation from "./hooks/useGeolocation";

function App() {
  const [city, setCity] = useState("Nuremberg"); // Default city
  const [unit, setUnit] = useState("metric"); // Default unit
  const [currentLocation, setCurrentLocation] = useState(null); // { lat, lon } or null
  const [userHasSearched, setUserHasSearched] = useState(false); // Track if user manually searched

  const {
    coordinates,
    error: geoError,
    loading: geoLoading,
  } = useGeolocation();

  // Only use geolocation on initial load (before user has searched)
  useEffect(() => {
    if (!userHasSearched) {
      if (coordinates) {
        setCurrentLocation({ lat: coordinates.lat, lon: coordinates.lon });
        setCity("Current Location"); // Display "Current Location" when using geolocation
      } else if (geoError) {
        console.error("Geolocation error:", geoError.message);
        // Fallback to default city if geolocation fails/denied
        setCurrentLocation(null);
        setCity("Nuremberg");
      }
    }
  }, [coordinates, geoError, userHasSearched]);

  const handleCitySearch = (newCity) => {
    setUserHasSearched(true); // Mark that user has manually searched
    setCity(newCity);
    setCurrentLocation(null); // Clear geolocation if user searches for a city
  };

  return (
    <Background>
      <div className="min-h-screen flex flex-col">
        <Header title="Weather Dashboard" />

        <main className="flex-1 py-8">
          <Container>
            <div className="mb-8">
              <WeatherSearch onSearch={handleCitySearch} />
            </div>
            <WeatherDashboard
              city={currentLocation ? undefined : city}
              lat={currentLocation?.lat}
              lon={currentLocation?.lon}
              unit={unit}
            />
          </Container>
        </main>

        <footer className="py-4 text-center text-gray-500 text-sm">
          <p>
            Powered by{" "}
            <a
              href="https://openweathermap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              OpenWeatherMap
            </a>
          </p>
        </footer>
      </div>
    </Background>
  );
}

export default App;
