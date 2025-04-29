import express from "express";
import cors from "cors";
import { getWeather } from "./modules/weatherModule.js";

const app = express();
const port = process.env.PORT || 3003;

// #Dynamic CORS for local and production
const allowedOrigins = [
  "http://localhost:5173", // local dev frontend
  "https://tvatdci.github.io", // frontend production on GitHub Pages
  "https://weather-cli-a5va.onrender.com", // your new backend URL
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// #Log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("Weather API Server is running 🚀");
});

// Weather endpoint
app.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const unit = req.query.unit || "metric"; // Default to metric
    const weatherReport = await getWeather(city, unit);
    res.json(weatherReport); // Send JSON response
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// #Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
