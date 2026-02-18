# Weather Application

🌈  
[**Live Weather App**](https://tvatdci.github.io/weather-CLI/)

> ⚠️ **Note:** The backend is hosted on Render's free tier, which may take a few seconds to wake up when you first access the app. Thanks for your patience! 😅

## Overview

This is a full-stack weather application built with modern React architecture and best practices. It fetches weather data from the OpenWeatherMap API and displays it in a beautiful, responsive UI with glassmorphism design.

If you would like to check out the legacy command-line interface version, please refer to the [feature/legacy-weather-cli branch](https://github.com/TVATDCI/weather-CLI/tree/feature/legacy-weather-cli).

The application consists of:

- A **backend** built with Node.js and Express to handle API requests and serve weather data.
- A **frontend** built with React 19 and Tailwind CSS v4 with a modern, scalable architecture.

---

## Features

### Backend

- Fetches weather data from the OpenWeatherMap API
- Handles API requests with Express
- Implements dynamic CORS for local and production environments
- Provides detailed weather information, including:
  - Temperature
  - Feels like temperature
  - Weather conditions
  - Humidity
  - Wind speed
  - Sunrise and sunset times
  - Cloud cover and visibility

### Frontend

- **Modern Architecture**: Custom hooks, API service layer, and atomic components
- **Glassmorphism UI**: Beautiful, modern design with Tailwind CSS v4
- **Dynamic Backgrounds**: Changes based on weather conditions
- **Responsive Design**: Works on all screen sizes
- **Loading States**: Skeleton loading for better UX
- **Error Handling**: Graceful error messages

---

## Architecture

### Directory Structure

```plaintext
frontend/src/
├── api/                          # API Layer
│   ├── axios.js                  # Axios instance with interceptors
│   ├── weatherApi.js             # Weather-specific API functions
│   └── index.js                  # Barrel export
│
├── components/
│   ├── ui/                       # Atomic UI components
│   │   ├── Button.jsx            # Reusable button
│   │   ├── Input.jsx             # Reusable input
│   │   ├── Card.jsx              # Glassmorphism card
│   │   ├── Skeleton.jsx          # Loading skeleton
│   │   └── index.js              # Barrel export
│   │
│   ├── weather/                  # Feature components
│   │   ├── WeatherCard.jsx       # Main weather display
│   │   ├── WeatherSearch.jsx     # Search form
│   │   ├── WeatherDetails.jsx    # Detailed weather info
│   │   ├── WeatherIcon.jsx       # Dynamic weather icons
│   │   └── index.js              # Barrel export
│   │
│   └── layout/                   # Layout components
│       ├── Header.jsx            # App header
│       ├── Container.jsx         # Responsive container
│       ├── Background.jsx        # Dynamic background
│       └── index.js              # Barrel export
│
├── hooks/                        # Custom React hooks
│   ├── useWeather.js             # Weather data fetching
│   ├── useLocalStorage.js        # Persist preferences
│   └── index.js                  # Barrel export
│
├── utils/                        # Utility functions
│   ├── formatters.js             # Temperature, date formatters
│   ├── weatherCodes.js           # Weather code mappings
│   ├── constants.js              # App constants
│   └── index.js                  # Barrel export
│
├── App.jsx                       # Main app component
├── main.jsx                      # Entry point
└── index.css                     # Tailwind imports & custom styles
```

### Key Design Patterns

1. **Custom Hooks**: `useWeather` encapsulates all weather-related state and logic
2. **API Service Layer**: Axios instance with interceptors for consistent error handling
3. **Atomic Components**: Small, reusable UI components with single responsibility
4. **Barrel Exports**: Clean imports with index.js files

---

## Requirements

- Node.js 18+ installed on your machine
- Basic understanding of JavaScript, React, and terminal commands

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

   ```plaintext
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
   VITE_API_BASE_URL=http://localhost:3003
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
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

> ⚠️ _Note: The backend is hosted on Render's free tier and may take a few seconds to spin up when first accessed._

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

## Tech Stack

### Frontend

- **React 19** - UI library
- **Tailwind CSS v4** - Utility-first CSS
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Vite** - Build tool

### Backend

- **Node.js** - Runtime
- **Express** - Web framework
- **node-fetch** - HTTP requests

---

## Future Enhancements

1. **Add Forecast Data**
   - Extend the backend to fetch and display multi-day weather forecasts.

2. **User Preferences**
   - Allow users to save their preferred cities and units (metric/imperial).
   - Use `useLocalStorage` hook for persistence.

3. **Geolocation**
   - Auto-detect user location for instant weather display.

4. **Weather Maps**
   - Integrate weather radar and satellite imagery.

5. **PWA Support**
   - Add service worker for offline functionality.

---

## Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [React Documentation](https://reactjs.org/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Express Documentation](https://expressjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Axios Documentation](https://axios-http.com/)

---

## Acknowledgments

This project was developed as a learning exercise to integrate external APIs, build a full-stack application, and deploy it for public use. Contributions and suggestions are welcome!

If you would like to check out the legacy command-line interface version, please refer to the [feature/legacy-weather-cli branch](https://github.com/TVATDCI/weather-CLI/tree/feature/legacy-weather-cli).

---

Thanks for smiling ! 😆
