# Weather Application

🌈  
[**Live Weather App**](https://tvatdci.github.io/weather-CLI/)

> ⚠️ **Note:** The backend is hosted on Render's free tier, which may take a few seconds to wake up when you first access the app. Thanks for your patience! 😅

## Overview

This version of the project is a full-stack weather application that allows users to search for the current weather of a city. It fetches weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

If you would like to check out the legacy command-line interface version, please refer to the [feature/legacy-weather-cli branch](https://github.com/TVATDCI/weather-CLI/tree/feature/legacy-weather-cli).

The application consists of:

- A **backend** built with Node.js and Express to handle API requests and serve weather data.
- A **frontend** built with React to provide a dynamic and interactive user interface.

---

## Features

### Backend

- Fetches weather data from the OpenWeatherMap API.
- Handles API requests with Express.
- Implements dynamic CORS for local and production environments.
- Provides detailed weather information, including:
  - Temperature
  - Feels like temperature
  - Weather conditions
  - Humidity
  - Wind speed
  - Sunrise and sunset times
  - Cloud cover and visibility

### Frontend

- Allows users to search for weather by city name.
- Displays weather data in a clean and responsive UI.
- Handles loading states and error messages gracefully.
- Uses environment variables to dynamically connect to the backend.

---

## Requirements

- Node.js installed on your machine.
- Basic understanding of JavaScript, React, and terminal commands.

---

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/weather-app.git
cd weather-app
```

### 2. Backend Setup

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:

```

plaintext
  KEY=your_actual_api_key_here
  PORT=3003
  FRONTEND_URL=http://localhost:5173
```

4. Start the backend server:
   ```bash
   npm start
   ```

### 3. Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:

   ```plaintext
   REACT_APP_BACKEND_URL=http://localhost:3003/weather
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

---

## Project Structure

```plaintext
weather-cli/
├── backend/
│   ├── .env               # Backend-specific environment variables
│   ├── package.json
│   ├── server.js
│   ├── modules/
│   │   └── weatherModule.js
│   └── README.md
├── frontend/
│   ├── .env.development   # Frontend environment variables for development
│   ├── .env.production    # Frontend environment variables for production
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── WeatherFetcher.jsx
│   │   │   ├── Btn.jsx
│   │   │   └── BtnSvg.jsx
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── index.css
│   ├── package.json
│   └── README.md
├── .gitignore
├── README.md
└── package.json


```

---

## API Endpoints

### Backend

- **GET `/weather/:city`**
  - Fetches weather data for the specified city.
  - Query Parameters:
    - `unit` (optional): `metric` (default) or `imperial`.

---

## 🚀 Deployment

### ✅ Live App

- The **frontend** is deployed on **GitHub Pages** and connects to:
  - the **backend** hosted on [Render](https://weather-cli-a5va.onrender.com)
  - the [OpenWeatherMap API](https://openweathermap.org/api) for weather data

🔗 [**Try it live →**](https://tvatdci.github.io/weather-CLI/)

> ⚠️ _Note: The backend is hosted on Render’s free tier and may take a few seconds to spin up when first accessed._

### ✅ Local Development

- Frontend runs at: `http://localhost:5173/`

---

### 🔧 Backend Deployment Steps

1. Deploy the backend to a service like **Render**, **Heroku**, or **AWS**.
2. Set the `FRONTEND_URL` in the backend `.env` file to match your deployed frontend URL.

### Frontend Deployment Steps

1. Build the frontend:
   ```bash
   npm run build
   ```

---

## How to Use

1. Start the backend server.
2. Start the frontend development server.
3. Open the frontend in your browser (default: `http://localhost:5173`).
4. Enter a city name in the search bar to fetch and display weather data.

---

## Future Enhancements

1. **Add Forecast Data**

   - Extend the backend to fetch and display multi-day weather forecasts.

2. **User Preferences**

   - Allow users to save their preferred cities and units (metric/imperial).

3. **Authentication**

   - Implement user authentication to save user-specific settings.

4. **Database Integration**

   - Store user preferences and weather data in a database like MongoDB or PostgreSQL.

5. **Full-Stack Deployment**
   - Combine the frontend and backend into a single deployment for simplicity.

---

## Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [React Documentation](https://reactjs.org/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Express Documentation](https://expressjs.com/)
- [dotenv Documentation](https://www.npmjs.com/package/dotenv)
- [Styled Components Documentation](https://styled-components.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

## Acknowledgments

This project was developed as a learning exercise to integrate external APIs, build a full-stack application, and deploy it for public use. Contributions and suggestions are welcome!

If you would like to check out the legacy command-line interface version, please refer to the [feature/legacy-weather-cli branch](https://github.com/TVATDCI/weather-CLI/tree/feature/legacy-weather-cli).

---

### Key Changes

1. **Updated Overview:** Reflects the full-stack nature of the project.
2. **Added Backend and Frontend Setup Instructions:** Includes `.env` setup and running both servers.
3. **Updated Project Structure:** Reflects the current folder structure.
4. **Added Deployment Instructions:** Explains how to deploy both the backend and frontend.
5. **Added Future Enhancements:** Lists potential improvements for the project.

Thanks for smiling ! 😆
