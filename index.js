const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const bodyParser = require("body-parser");

// selecting view engine and connecting to views
app.set("view engine", "ejs");
app.set("views", "./views");

//Connecting to static folder with express middle
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));

app.use("/", require("./routes/index.js"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in starting server: ${err}`);
    return;
  }

  console.log(`Starting server on port ${port}`);
});
