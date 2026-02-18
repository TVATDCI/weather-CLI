import { useState } from "react";
import { Header, Container, Background } from "./components/layout";
import WeatherDashboard from "./components/weather/WeatherDashboard";
import WeatherSearch from "./components/weather/WeatherSearch";

function App() {
  const [city, setCity] = useState("Nuremberg"); // Default city
  const [unit, setUnit] = useState("metric"); // Default unit

  return (
    <Background>
      <div className="min-h-screen flex flex-col">
        <Header title="Weather Dashboard" />

        <main className="flex-1 py-8">
          <Container>
            <div className="mb-8">
              <WeatherSearch onSearch={setCity} />
            </div>
            <WeatherDashboard city={city} unit={unit} />
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
