import dotenv from "dotenv";
import chalk from "chalk";
import fetch from "node-fetch";

dotenv.config();

const city = process.argv[2];
const unit = process.argv[3] === "imperial" ? "imperial" : "metric";
const port = process.env.PORT || 3003;

if (!city) {
  console.log(
    chalk.red(
      "Please run node weather.js (and provide a city name). For example - node weather.js London "
    )
  );
  process.exit(1);
}

const apiKey = process.env.KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error("City not found or invalid API request");
      });
    }
    return response.json();
  })
  .then((data) => {
    const tempUnit = unit === "imperial" ? "°F" : "°C";
    const now = new Date();
    const localTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "short",
    }).format(new Date((data.dt + data.timezone) * 1000));

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
