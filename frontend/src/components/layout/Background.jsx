import PropTypes from "prop-types";
import { getWeatherStyle } from "../../utils/weatherCodes";

/**
 * Background component
 * Dynamic background that changes based on weather conditions
 *
 * @param {Object} props - Component props
 * @param {number} props.weatherCode - OpenWeatherMap weather code
 * @param {React.ReactNode} props.children - Background content
 */
export const Background = ({ weatherCode, children }) => {
  const style = weatherCode ? getWeatherStyle(weatherCode) : null;
  const gradient =
    style?.gradient || "from-blue-900 via-purple-900 to-pink-900";

  return (
    <div
      className={`
        min-h-screen
        bg-gradient-to-br ${gradient}
        transition-all duration-1000 ease-in-out
      `}
    >
      {children}
    </div>
  );
};

Background.propTypes = {
  weatherCode: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Background;
