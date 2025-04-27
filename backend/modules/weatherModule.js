import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const getWeather = async (city, unit = "metric") => {
  if (!city) {
    throw new Error("Please provide a city name.");
  }

  const apiKey = process.env.KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found or invalid API request");
    }
    const data = await response.json();

    const tempUnit = unit === "imperial" ? "°F" : "°C";

    return {
      city: data.name,
      country: data.sys.country,
      temperature: `${data.main.temp} ${tempUnit}`,
      feels_like: `${data.main.feels_like} ${tempUnit}`,
      conditions: data.weather[0].description,
      visibility: `${data.visibility / 1000} km`,
      cloud_cover: `${data.clouds.all}%`,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      humidity: `${data.main.humidity}%`,
      wind_speed: `${data.wind.speed} m/s`,
      pressure: `${data.main.pressure} hPa`,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getWeather };
