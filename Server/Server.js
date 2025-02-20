import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectdb from "./db/database.js";  // Import MongoDB connection logic
import blogRoute from "./routes/blogsroute.js";

// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// Initialize Express app
const app = express();
app.get("/",(req,res)=>{
  res.send("Hello World");
})

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Establish MongoDB connection
connectdb();

// Route to fetch blogs from Blogger API and store them in MongoDB
app.use("/api", blogRoute);


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
