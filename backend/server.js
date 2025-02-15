import express from "express";
import { getWeather } from "./modules/weatherModule.js";

const app = express();
const port = process.env.PORT || 3003;

// create an endpoint for the weather report

app.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const unit = req.query.unit || "metric"; // Default to metric
    const weatherReport = await getWeather(city, unit);
    res.send(`<pre>${weatherReport}</pre>`); // Preformatted text in response
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
