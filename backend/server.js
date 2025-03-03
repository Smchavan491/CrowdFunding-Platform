const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbconfig = require("./config/dbconfig");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", require("./routes/userRoutes"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
