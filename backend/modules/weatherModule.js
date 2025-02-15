import dotenv from "dotenv";
import chalk from "chalk";
import fetch from "node-fetch";

dotenv.config();

const port = process.env.PORT || 3003; // Default port

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
    const now = new Date(); // Get current date and time

    const localTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "short",
    }).format(new Date((data.dt + data.timezone) * 1000));

    const report = `
${chalk.cyan("@@@@@@@@@@@@@@@@@@@")}
${chalk.cyan("@ WEATHER PROGRAM @")}
${chalk.cyan("@@@@@@@@@@@@@@@@@@@")}
${chalk.green(`\nReport generated on: ${now.toLocaleString()}`)}
${chalk.gray(`Running on port: ${port}`)}
${chalk.cyan(`Local time in ${data.name}: ${localTime}`)}

It is now ${chalk.cyan(data.main.temp + tempUnit)} in ${chalk.magenta(
      data.name
    )}
The current weather conditions are: ${chalk.magenta(
      data.weather[0].description
    )}
Feels like: ${chalk.cyan(data.main.feels_like + tempUnit)}
Visibility: ${chalk.blue(data.visibility / 1000)} km
Cloud Cover: ${chalk.blue(data.clouds.all)}%
Sunrise: ${chalk.yellow(new Date(data.sys.sunrise * 1000).toLocaleTimeString())}
Sunset: ${chalk.yellow(new Date(data.sys.sunset * 1000).toLocaleTimeString())}
Humidity: ${chalk.blue(data.main.humidity)}%
Wind Speed: ${chalk.blue(data.wind.speed)} m/s
Pressure: ${chalk.blue(data.main.pressure)} hPa
`;

    return report;
  } catch (error) {
    throw new Error(chalk.red("Error: " + error.message));
  }
};

// Export the function for use in other files
export { getWeather };
