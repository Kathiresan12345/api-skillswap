const express = require("express");
require("dotenv").config();
require("./models/db.js");
const User = require("./models/user.js");

const app = express();
app.use(express.json());

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);
