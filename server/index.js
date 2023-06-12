const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// built in middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors
app.use(cors());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
