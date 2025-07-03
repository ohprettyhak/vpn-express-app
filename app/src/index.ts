import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  console.log("Received request at root endpoint.");
  res.send("This API is running through OpenVPN.");
});

app.get("/ip", async (_req, res) => {
  console.log("Attempting to retrieve public IP address...");
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    console.log("Public IP fetched successfully:", response.data.ip);
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch public IP address:", error);
    res.status(500).json({error: "Could not fetch IP address"});
  }
});

app.listen(port, () => {
  console.log(`🚀 vpn-express-app is running on port ${port}`);
});
