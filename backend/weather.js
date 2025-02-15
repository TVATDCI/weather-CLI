import dotenv from "dotenv";
import chalk from "chalk";
import fetch from "node-fetch";

dotenv.config();

const city = process.argv[2];
/**
 *  Extracting city name from the command line arguments:
 * - For example, if the user runs the program with the command "node weather.js London", the city variable will be set to London. Then, = process.argv[2] will be set to command line argument 2, which is London.
 */
const unit = process.argv[3] === "imperial" ? "imperial" : "metric";
/**
 * Determining unit of temperature from the command line arguments:
 * - const unit = process.argv[3] is again extracting the third command line argument(argument 0 is node, argument 1 is the file name, argument 2 is the city name, and argument 3 is the unit of temperature).
 * - Now === "imperial" ? is a ternary operator that checks if the unit in the command line argument is imperial. If it is, the unit variable is set to imperial; otherwise, it is set to metric (btw.by default).
 */
const port = process.env.PORT || 3003; // Default port is 3000

if (!city) {
  console.log(chalk.red("Please provide a city name."));
  process.exit(1);
}

const apiKey = process.env.KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        // OpenWeatherMap API returns an error message in JSON format
        throw new Error("City not found or invalid API request");
      });
    }
    return response.json(); // If the response is OK, return the JSON data
  })
  .then((data) => {
    const tempUnit = unit === "imperial" ? "°F" : "°C";
    const now = new Date(); // Get current date and time
    {
      /* const localTime = new Date(
      (data.dt + data.timezone) * 1000
    ).toLocaleString();
    */
    }
    // Use Intl.DateTimeFormat API
    const localTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "short",
    }).format(new Date((data.dt + data.timezone) * 1000));
    {
      /**
      // Or it is possible to install moment-timezone and use city-based time zone (eg. "Europe/London")
      const moment = require("moment-timezone");

      // const localTime = moment
  .unix(data.dt) // Convert timestamp
  .utcOffset(data.timezone / 60) // Convert seconds to minutes
  .format("LLLL"); // Format date/time

       */
    }
    }).format(new Date((data.dt + data.timezone) * 1000)); // Convert UTC time to local time

    console.log(chalk.cyan("@@@@@@@@@@@@@@@@@@@"));
    console.log(chalk.cyan("@ WEATHER PROGRAM @"));
    console.log(chalk.cyan("@@@@@@@@@@@@@@@@@@@"));
    console.log(chalk.green(`\nReport generated on: ${now.toLocaleString()}`));
    console.log(chalk.gray(`Running on port: ${port}`));
    console.log(chalk.cyan(`Local time in ${data.name}: ${localTime}`));
    console.log(
      `\nIt is now ${chalk.cyan(data.main.temp + tempUnit)} in ${chalk.magenta(
        data.name
      )}`
    );
    console.log(
      `The current weather conditions are: ${chalk.magenta(
        data.weather[0].description
      )}`
    );
    console.log(`Feels like: ${chalk.cyan(data.main.feels_like + tempUnit)}`);
    console.log(`Visibility: ${chalk.blue(data.visibility / 1000)} km`);
    console.log(`Cloud Cover: ${chalk.blue(data.clouds.all)}%`);
    console.log(
      `Sunrise: ${chalk.yellow(
        new Date(data.sys.sunrise * 1000).toLocaleTimeString()
      )}`
    );
    console.log(
      `Sunset: ${chalk.yellow(
        new Date(data.sys.sunset * 1000).toLocaleTimeString()
      )}`
    );

    console.log(`Humidity: ${chalk.blue(data.main.humidity)}%`);
    console.log(`Wind Speed: ${chalk.blue(data.wind.speed)} m/s`);
    console.log(`Pressure: ${chalk.blue(data.main.pressure)} hPa`);
  })
  .catch((error) => console.error(chalk.red("Error:", error.message)));
