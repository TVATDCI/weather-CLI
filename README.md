# Weather CLI Application

## Overview

This project demonstrates how to build a Command Line Interface (CLI) application that fetches and displays the current weather of a city using an external API. You will learn how to:

- Set up a Node.js project with `npm`.
- Use environment variables to securely manage sensitive data like API keys.
- Fetch data from an external API.
- Format and display results in the terminal using `chalk`.
- Handle user input and errors effectively.
- Add additional functionality such as date, port, and unit switching.

---

## Requirements

- Node.js installed on your machine.
- Basic understanding of JavaScript and terminal commands.

---

## Project Setup

1. **Initialize the project:**

   ```bash
   npm init -y
   ```

   This creates a `package.json` file to manage dependencies.

2. **Install dependencies:**

   ```bash
   npm install dotenv chalk node-fetch@2
   ```

   - `dotenv`: To manage environment variables.
   - `chalk`: To style terminal output.
   - `node-fetch`: To make HTTP requests.

3. **Project structure:**
   ```plaintext
   weather-CLI/
   ├── .env
   ├── .gitignore
   ├── package.json
   ├── weather.js
   └── README.md
   ```

---

## Tasks and Implementation

### 1. Create `.env` File for API Key

- Store your API key securely in `.env`:
  ```plaintext
  KEY=your_actual_api_key_here
  PORT=3000
  ```
- Add `.env` to `.gitignore`:
  ```plaintext
  .env
  ```

### 2. Configure `weather.js`

Create `weather.js` to fetch and display weather information:

```javascript
import dotenv from "dotenv";
import chalk from "chalk";
import fetch from "node-fetch";

dotenv.config();

const city = process.argv[2];
const unit = process.argv[3] === "imperial" ? "imperial" : "metric"; // Default to metric
const port = process.env.PORT || 3000; // Default port is 3000

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
    const localTime = new Date(
      (data.dt + data.timezone) * 1000
    ).toLocaleString();

    console.log(chalk.cyan("@@@@@@@@@@@@@@@@@@@"));
    console.log(chalk.cyan("@ WEATHER PROGRAM @"));
    console.log(chalk.cyan("@@@@@@@@@@@@@@@@@@@"));
    console.log(chalk.gray(`\nReport generated on: ${now.toLocaleString()}`));
    console.log(chalk.gray(`Running on port: ${port}`));
    console.log(chalk.gray(`Local time in ${data.name}: ${localTime}`));
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
    console.log(`Humidity: ${chalk.blue(data.main.humidity)}%`);
    console.log(`Wind Speed: ${chalk.blue(data.wind.speed)} m/s`);
    console.log(`Pressure: ${chalk.blue(data.main.pressure)} hPa`);
  })
  .catch((error) => console.error(chalk.red("Error:", error.message)));
```

---

### 3. Run the Program

1. Add a `start` script to your `package.json`:

   ```json
   "scripts": {
     "start": "node --require dotenv/config weather.js"
   }
   ```

2. Execute the program:

   ```bash
   npm start london
   ```

   Example output:

   ```plaintext
   @@@@@@@@@@@@@@@@@@@
   @ WEATHER PROGRAM @
   @@@@@@@@@@@@@@@@@@@

   Report generated on: 12/19/2024, 10:00:00 AM
   Running on port: 3000

   It is now 5.46°C in London
   The current weather conditions are: overcast clouds
   Humidity: 80%
   Wind Speed: 5.1 m/s
   Pressure: 1012 hPa
   ```

---

## Features

### 1. Add Unit Switching

- The program supports metric and imperial units.
- Add a second argument:
  ```bash
  npm start london imperial
  ```

### 2. Display Date and Port

- The current date is fetched using the `Date` object.
- The port is read from `.env` or defaults to `3000`.

### 3. Display Additional Weather Details

- The program now displays additional weather details such as humidity, wind speed, and pressure.

---

## Summary

##### I have learned how to:

- Use `process.argv` for CLI arguments.
- Make HTTP requests using `node-fetch`.
- Manage API keys securely with `dotenv`.
- Style terminal output with `chalk`.
- Handle errors gracefully.

---

#### Additional Highlights

Environment Variable Management: The project demonstrates best practices for handling sensitive information like API keys using .env files.

Custom Output Styling: The chalk library is used to enhance the user experience with colorful and readable console outputs.

Extensibility: The program is designed to be easily extendable, with bonus features such as unit switching and additional weather details.

##### If you are looking to a little bit of getting to know:

- How to work with APIs in Node.js.
- Understand CLI application development.
- Explore the use of third-party libraries like dotenv and chalk.

Feel free to fork this project, explore the code, and add more features or customization! For any questions or suggestions, contributions are welcome through GitHub.

##### How to Run

Follow the steps in this document to set up and run the project in your local environment.

##### Or, you can extend this project by:

- Adding more weather details (e.g., humidity, wind speed).
- Allowing users to save preferences.
- Implementing more advanced CLI options with libraries like `yargs`. Check the resources below!

---

## Future Enhancements

### 1. Modularize Code

- Split the code into separate modules for better organization and maintainability.
- Example: Create separate files for fetching data, handling user input, and displaying results.

### 2. Add Unit Tests

- Write unit tests to ensure your code works as expected.
- Use a testing framework like Jest.
- Example: Test the API response handling and error scenarios.

### 3. Expand API Usage

- Fetch more weather data, such as forecasts, humidity, wind speed, etc.
- Display additional weather details in the output.

### 4. Frontend Integration

- Create a simple frontend using HTML, CSS, and JavaScript.
- Use a frontend framework like React or Vue.js for a more dynamic UI.
- Example: Display weather data in a web page with interactive elements.

### 5. Express Server

- Set up an Express server to serve your frontend and handle API requests.
- Example: Create routes for fetching weather data and serving static files.

### 6. Database Integration

- Store user preferences or weather data in a database like MongoDB or PostgreSQL.
- Example: Save favorite cities and display their weather data on demand.

### 7. User Authentication

- Implement user authentication to save user-specific settings.
- Example: Allow users to create accounts and save their preferred cities and units.

### 8. Deployment

- Deploy your application to a platform like Heroku, Vercel, or AWS.
- Example: Make your weather app accessible online for users to check the weather from anywhere.

---

## Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Chalk Documentation](https://www.npmjs.com/package/chalk)
- [dotenv Documentation](https://www.npmjs.com/package/dotenv)
- [Express Documentation](https://expressjs.com/)
- [Jest Documentation](https://jestjs.io/)
- [React Documentation](https://reactjs.org/)
- [Vue.js Documentation](https://vuejs.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

The current description is clear and concise. Here is an enhanced version that includes additional details about the features and learning outcomes:

"This project is designed as a learning exercise for integrating external APIs and building CLI applications in Node.js. The program takes a city name as input, fetches weather data from the OpenWeatherMap API, and displays it in a well-formatted output in the terminal. It supports unit switching between metric and imperial, displays additional weather details such as humidity, wind speed, and pressure, and handles user input and errors effectively."

For topic tags, you can consider the following based on the content of your

README.md

:

- Node.js
- CLI
- API
- OpenWeatherMap
- Weather
- JavaScript
- dotenv
- chalk
- node-fetch
- Learning
- Tutorial
- Command Line Interface
- Environment Variables
- HTTP Requests
- Error Handling

These tags will help others find your project based on the technologies and concepts it covers.
