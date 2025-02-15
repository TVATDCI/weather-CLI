import express from "express";
import cors from "cors";
import { getWeather } from "./modules/weatherModule.js";

const app = express();
const port = process.env.PORT || 3003;

// prepare cors for cross-origin requests
app.use(cors({ origin: "http://localhost:5173" }));

app.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const unit = req.query.unit || "metric"; // Default to metric
    const weatherReport = await getWeather(city, unit);
    res.json(weatherReport); // Send JSON response
    // res.send(`pre>${weatherReport}</pre>`); // Or send preformatted text response to mimic the original API
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
