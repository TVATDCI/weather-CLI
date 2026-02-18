import { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

/**
 * WeatherSearch component
 * Search form for city weather lookup
 *
 * @param {Object} props - Component props
 * @param {function} props.onSearch - Search callback function
 * @param {boolean} props.loading - Loading state
 */
export const WeatherSearch = ({ onSearch, loading }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1"
        disabled={loading}
      />
      <Button type="submit" loading={loading} className="min-w-[120px]">
        {loading ? "Searching..." : "Search"}
      </Button>
    </form>
  );
};

WeatherSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

WeatherSearch.defaultProps = {
  loading: false,
};

export default WeatherSearch;
