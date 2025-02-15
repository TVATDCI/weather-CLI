import { useState } from "react";
import {
  FaSnowflake,
  FaBolt,
  FaCloudRain,
  FaSun,
  FaWind,
  FaTemperatureHigh,
  FaTemperatureLow,
} from "react-icons/fa";
import Btn from "./Btn";
import { forecastAlien } from "../assets/index";
import WeatherFetcher from "./WeatherFetcher";

const WeatherComponent = () => {
  const [searchCity, setSearchCity] = useState(""); // Input field value
  const [city, setCity] = useState(null); // No default city

  const handleSearch = () => {
    if (searchCity.trim() === "") return; // Prevent empty searches
    setCity(searchCity);
  };

  return (
    <div className="p-4 bg-gradient-to-b from-[#050913] via-[#392679] to-[#050913] rounded-lg shadow-md">
      <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-800 p-2">
        Weather Information
      </h1>

      {/* Search Input */}
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          className="px-3 py-2 rounded-lg text-gray-900 bg-neutral-300 focus:outline-none focus:ring focus:ring-green-400 focus:bg-neutral-900 focus:text-neutral-300"
          placeholder="Enter city..."
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button
          className="text-neutral-800 px-4 py-2 rounded-lg bg-neutral-300 hover:bg-transparent hover:text-neutral-100 transition-all duration-1000 ease-in-out"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Show WeatherFetcher only if a city is entered */}
      {city ? (
        <WeatherFetcher city={city} />
      ) : (
        <p className="text-gray-400">Enter a city to get weather updates.</p>
      )}

      {/* Styled Button */}
      <Btn
        className="mt-4 flex items-center space-x-2"
        href="/weather"
        onClick={handleSearch}
      >
        <span className="flex items-center space-x-1">
          <img
            className="mx-4"
            src={forecastAlien}
            alt="Forecast Alien"
            width={50}
          />
          Get Weather
          <FaTemperatureHigh className="text-red-500" />
          <FaTemperatureLow className="text-blue-500" />
          <FaSnowflake className="text-blue-500" />
          <FaBolt className="text-yellow-500" />
          <FaCloudRain className="text-blue-400" />
          <FaWind className="text-neutral-300" />
          <FaSun className="text-yellow-400" />
        </span>
      </Btn>
    </div>
  );
};

export default WeatherComponent;
