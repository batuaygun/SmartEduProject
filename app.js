const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoutes");
const courseRoute = require("./routes/courseRoute");

//Connect DB
mongoose.connect("mongodb://localhost/smartedu-db").then(() => {
  console.log("DB Connected!");
});

const app = express();

//Template Engine
app.set("view engine", "ejs");

//Middleware
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
