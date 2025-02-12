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
   project-folder/
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
import chalk from "chalk";
import fetch from "node-fetch";

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

    console.log(chalk.cyan("@@@@@@@@@@@@@@@@@@@"));
    console.log(chalk.cyan("@ WEATHER PROGRAM @"));
    console.log(chalk.cyan("@@@@@@@@@@@@@@@@@@@"));
    console.log(chalk.gray(`\nReport generated on: ${now.toLocaleString()}`));
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
