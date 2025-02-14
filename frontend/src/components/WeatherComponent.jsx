// src/components/WeatherComponent.jsx
import Btn from "./Btn";

const WeatherComponent = () => {
  return (
    <div>
      <h1 className="text-red ">Weather Information</h1>
      {/* Weather details will be displayed here */}
      <Btn className="mt-4" href="/weather">
        <span>Check weather</span>
      </Btn>
    </div>
  );
};

export default WeatherComponent;
