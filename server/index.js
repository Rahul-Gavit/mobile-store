require("dotenv").config();

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const Mobile = require("./model/mobile");

app.use(cors());

const mongoURL = process.env.MONGO_URL;

mongoose
  .connect(mongoURL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Retrieve all mobiles
app.get("/mobiles", async (req, res) => {
  try {
    const data = await Mobile.find({});
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Retrieve a specific mobile by ID
app.get("/mobiles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Mobile.findById(id);

    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching mobile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
