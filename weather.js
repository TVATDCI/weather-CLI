import chalk from "chalk";
import fetch from "node-fetch";

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
      throw new Error("City not found or invalid API request");
    }
    return response.json();
  })
  .then((data) => {
    const tempUnit = unit === "imperial" ? "°F" : "°C";
    const now = new Date(); // Get current date and time

    console.log(chalk.cyan("@@@@@@@@@@@@@@@@@@@"));
    console.log(chalk.cyan("@ WEATHER PROGRAM @"));
    console.log(chalk.cyan("@@@@@@@@@@@@@@@@@@@"));
    console.log(chalk.yellow(`\nReport generated on: ${now.toLocaleString()}`));
    console.log(chalk.gray(`Running on port: ${port}`));
    console.log(
      `\nIt is now ${chalk.green(data.main.temp + tempUnit)} in ${chalk.yellow(
        data.name
      )}`
    );
    console.log(
      `The current weather conditions are: ${chalk.magenta(
        data.weather[0].description
      )}`
    );
  })
  .catch((error) => console.error(chalk.red("Error:", error.message)));
