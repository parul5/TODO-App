const express = require("express");
const app = express();
const port = 8000;

// getting database
const db = require("./config/mongoose");

// selecting view engine and connecting to views
app.set("view engine", "ejs");
app.set("views", "./views");

//Connecting to static folder using middleware
app.use(express.json());
// Midleware to get form data
app.use(express.urlencoded({ extended: true }));
// getting static css and images
app.use(express.static("assets"));

// routing
app.use("/", require("./routes/index.js"));

// starting server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in starting server: ${err}`);
    return;
  }

  console.log(`Starting server on port ${port}`);
});
