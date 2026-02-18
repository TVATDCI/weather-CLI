import { useWeather } from "./hooks";
import { Header, Container, Background } from "./components/layout";
import { WeatherCard, WeatherSearch } from "./components/weather";
import { WeatherSkeleton } from "./components/ui";

/**
 * Main App component
 * Refactored with custom hooks and modular components
 */
function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  return (
    <Background>
      <div className="min-h-screen flex flex-col">
        <Header title="Weather App" />

        <main className="flex-1 py-8">
          <Container>
            {/* Search Section */}
            <div className="mb-8">
              <WeatherSearch onSearch={fetchWeather} loading={loading} />
            </div>

            {/* Error State */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
                <p className="font-medium">Error: {error}</p>
              </div>
            )}

            {/* Loading State */}
            {loading && <WeatherSkeleton />}

            {/* Weather Display */}
            {weather && !loading && <WeatherCard weather={weather} />}

            {/* Empty State */}
            {!weather && !loading && !error && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  Enter a city name to get the current weather
                </p>
              </div>
            )}
          </Container>
        </main>

        {/* Footer */}
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
