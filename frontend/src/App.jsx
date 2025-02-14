import React from "react";
import WeatherComponent from "./components/WeatherComponent";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="p-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Weather App</h1>
      </header>
      <main className="p-4">
        <WeatherComponent />
      </main>
    </div>
  );
}

export default App;
