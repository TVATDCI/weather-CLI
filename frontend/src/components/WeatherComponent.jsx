// src/components/WeatherComponent.jsx
import Btn from "./Btn";

const WeatherComponent = () => {
  return (
    <div>
      <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2">
        Weather Information
      </h1>
      {/* Weather details will be displayed here */}
      <Btn className="mt-4" href="/weather">
        <span>Check Weather</span>
      </Btn>
    </div>
  );
};

export default WeatherComponent;
