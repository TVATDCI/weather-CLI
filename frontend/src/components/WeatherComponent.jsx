// src/components/WeatherComponent.jsx
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

const WeatherComponent = () => {
  return (
    <div className="p-4 bg-gradient-to-b from-[#050913] via-[#392679] to-[#050913 rounded-lg shadow-md">
      <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2">
        Weather Information
      </h1>
      {/* Weather details will be displayed here */}
      <Btn className="mt-4 flex items-center space-x-2 " href="/weather">
        <span className="flex items-center space-x-1">
          <img
            className="mx-4"
            src={forecastAlien}
            alt="Forecast Alien"
            width={50}
          />
          <FaSnowflake className="text-blue-500" />
          <FaBolt className="text-yellow-500" />
          <FaCloudRain className="text-blue-400" />
          <FaSun className="text-yellow-400" />
          <FaWind className="text-neutral-300" />
          <FaTemperatureHigh className="text-red-500" />
          <FaTemperatureLow className="text-blue-500" />
        </span>
      </Btn>
    </div>
  );
};

export default WeatherComponent;
