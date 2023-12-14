const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Define alert thresholds for each location type
const alertThresholds = {
  highway: 4,
  city_center: 3,
  commercial: 2,
  residential: 1,
};
app.use(bodyParser.json());

// MongoDB connection string (replace with your actual connection string)
const mongoDBConnectionString =
  "mongodb+srv://attadapravalika:attadapravalika@cluster0.nwz85qo.mongodb.net/task";

// Connect to MongoDB
mongoose.connect(mongoDBConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check MongoDB connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// MongoDB schema for events
const EventSchema = new mongoose.Schema({
  timestamp: String,
  is_driving_safe: Boolean,
  vehicle_id: String,
  location_type: String,
});

// MongoDB model for events
const Event = mongoose.model("Event", EventSchema);

// MongoDB schema for alerts
const AlertSchema = new mongoose.Schema({
  timestamp: String,
  location_type: String,
  message: String,
});

// MongoDB model for alerts
const Alert = mongoose.model("Alert", AlertSchema);

// Endpoint for IoT device to send driving events
app.post("/event", async (req, res) => {
  try {
    const { timestamp, is_driving_safe, vehicle_id, location_type } = req.body;

    // Save the event to MongoDB
    const event = new Event({
      timestamp,
      is_driving_safe,
      vehicle_id,
      location_type,
    });

    await event.save();

    // Run rule engine (check for alerts)
    await checkForAlerts();

    res.status(200).json({ message: "Event received successfully" });
  } catch (error) {
    console.error("Error processing event:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to retrieve all events
app.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to retrieve all alerts
app.get("/alerts", async (req, res) => {
  try {
    const alerts = await Alert.find();
    res.status(200).json(alerts);
  } catch (error) {
    console.error("Error fetching alerts:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to retrieve a single alert by ID
app.get("/alert/:alert_id", async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.alert_id);

    if (alert) {
      res.status(200).json(alert);
    } else {
      res.status(404).json({ message: "Alert not found" });
    }
  } catch (error) {
    console.error("Error fetching alert:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Rule engine function
const checkForAlerts = async () => {
  try {
    const currentTime = new Date();
    console.log("Current Time:", currentTime);

    // Adjust the timestamp for the past 5 minutes
    const startTime = new Date(currentTime - 5 * 60 * 1000);
    console.log("Start Time:", startTime);

    const pastEvents = await Event.find({
      timestamp: {
        $gte: startTime.toISOString(), // Convert to ISO string for comparison
        $lt: currentTime.toISOString(),
      },
    });

    console.log("Past Events:", pastEvents);

    // Logic to evaluate the rule and generate alerts
    for (const locationType of Object.keys(alertThresholds)) {
      const threshold = alertThresholds[locationType];
      const unsafeEvents = pastEvents.filter(
        (event) =>
          event.location_type === locationType && !event.is_driving_safe
      );
      console.log("Location Type:", locationType);
      console.log("Unsafe Events:", unsafeEvents);
      if (unsafeEvents.length >= threshold) {
        // Generate and store an alert in MongoDB
        const alertMessage = `Unsafe driving detected in ${locationType} area`;
        const alert = new Alert({
          timestamp: new Date().toISOString(),
          location_type: locationType,
          message: alertMessage,
        });

        await alert.save();
      }
    }
  } catch (error) {
    console.error("Error in checkForAlerts:", error.message);
  }
};

// Schedule rule engine to run every 5 minutes
setInterval(checkForAlerts, 5 * 60 * 1000);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
