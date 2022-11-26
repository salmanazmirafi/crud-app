const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const Router = require("./src/routes/api");
// Security Middleware Lib Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

// Database Lib Import
const mongoose = require("mongoose");

app.use(express.static("client/build"));

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser Implement
app.use(bodyParser.json());

// env config
dotenv.config();

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Mongo DB Database Connection
mongoose.connect(process.env.DATABASE_URI, (error) => {
  console.log("Connection Success");
  console.log(error);
});

// Routing Implement
app.use("/api", Router);

// Add React Front End Routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
